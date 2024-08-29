
import { fileManager, genAi } from '../utils/geminiAI';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { invalidData, readingAlreadyDone } from '../errors';
import readingsDatabase from '../utils/readingDatabase';
import readingRepository from '../repository/readingRepository';


async function generateReading(measure_type: string, measure_datetime: Date, customer_code: string, base64Image: string) {
    const existingReading = await readingRepository.findCustomerCode(customer_code);
    const month = new Date().getMonth()

    if (existingReading[0].measure_datetime.getMonth() == month) {
        throw readingAlreadyDone()
    }

    const buffer = Buffer.from(base64Image, 'base64');
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
        { text: "Gere um valor aleatorio com base na imagem, exemplo: 100, 250. Gere apenas esse valor, não faça comentarios" }
    ]);

    const measure_value = parseInt(result.response.text(), 10);
    const measure_uuid = uuidv4();

    await readingRepository.uploadImage(customer_code, measure_datetime, measure_type, measure_value, measure_uuid, file.file.uri)

    await fs.promises.unlink(tempFilePath);

    return { measure_uuid, measure_value, fileUri: file.file.uri }
}

const uploadService = { generateReading }

export default uploadService