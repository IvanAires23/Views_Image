
import { fileManager, genAi } from '../utils/geminiAI';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { readingAlreadyDone } from '../errors';
import readingRepository from '../repository/readingRepository';
import promptGeminiAi from '../utils/prompt';


async function generateReading(measure_type: string, measure_datetime: Date, customer_code: string, base64Image: string) {
    const existingReading = await readingRepository.findCustomerCode(customer_code);
    const month = new Date(measure_datetime).getMonth()

    if (existingReading.length >= 1) {
        existingReading.forEach(reading => {
            if (reading.measure_datetime.getMonth() == month) throw readingAlreadyDone()
        })
    }

    const buffer = Buffer.from(base64Image, 'base64');
    const tempFilePath = 'temp_image.jpg';
    await fs.promises.writeFile(tempFilePath, buffer);

    const updateFile = await fileManager.uploadFile(tempFilePath, {
        mimeType: "image/jpeg",
    });

    const model = genAi.getGenerativeModel({
        model: "gemini-1.5-pro"
    });

    const result = await model.generateContent([
        {
            fileData: {
                mimeType: updateFile.file.mimeType,
                fileUri: updateFile.file.uri
            }
        },
        { text: promptGeminiAi }
    ]);

    const measure_value = parseFloat(result.response.text().replace(/\./g, '').replace(',', '.'))
    const measure_uuid = uuidv4();


    await readingRepository.uploadImage(
        customer_code,
        measure_datetime,
        measure_type,
        measure_value,
        measure_uuid,
        updateFile.file.uri)

    await fs.promises.unlink(tempFilePath);

    return { measure_uuid, measure_value, fileUri: updateFile.file.uri }
}

const uploadService = { generateReading }

export default uploadService