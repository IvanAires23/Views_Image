
import { fileManager, genAi } from '../utils/geminiAI';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { invalidData, readingAlreadyDone } from '../errors';

const readingsDatabase: { [key: string]: { measure_type: string, measure_datetime: Date } } = {};

async function uploadService(measure_type: string, measure_datetime: string, customer_code: string, base64Image: string) {
    const currentMonth = new Date(measure_datetime).getMonth();
    const existingReading = readingsDatabase[`${customer_code}-${measure_type}-${currentMonth}`];

    if (existingReading) {
        throw readingAlreadyDone()
    }

    const base64Regex = /^data:image\/(jpeg|jpg|png);base64,/;
    if (!base64Regex.test(base64Image)) {
        throw invalidData()
    }

    const buffer = Buffer.from(base64Image.replace(base64Regex, ''), 'base64');
    const tempFilePath = 'temp_image.jpg';
    await fs.promises.writeFile(tempFilePath, buffer);

    const file = await fileManager.uploadFile(tempFilePath, {
        mimeType: "image/jpeg",
    });

    const model = genAi.getGenerativeModel({
        model: "gemini-1.5-pro"
    });

    const result = await model.generateContent([
        {
            fileData: {
                mimeType: file.file.mimeType,
                fileUri: file.file.uri
            }
        },
        { text: "Descreva como esse produto pode ser fabricado." }
    ]);

    const measure_value = parseInt(result.response.text(), 10);;
    const measure_uuid = uuidv4();

    readingsDatabase[`${customer_code}-${measure_type}-${currentMonth}`] = {
        measure_type,
        measure_datetime: new Date(measure_datetime)
    };

    await fs.promises.unlink(tempFilePath);

    return { measure_uuid, measure_value, fileUri: file.file.uri }
}

const service = { uploadService }

export default service