import { Request, Response } from 'express';
import axios from 'axios';
import { fileManager, genAi } from '../utils/geminiAI';
import fs from 'fs';
export const uploadImage = async (req: Request, res: Response) => {
    try {
        const { base64Image } = req.body;

        const base64Regex = /^data:image\/(jpeg|jpg|png);base64,/;
        if (!base64Regex.test(base64Image)) {
            console.error("Formato Base64 inválido.");
            return;
        }
        const buffer = Buffer.from(base64Image.replace(base64Regex, ''), 'base64');
        const tempFilePath = 'temp_image.jpg'; // Você pode usar .png se sua imagem for PNG
        await fs.promises.writeFile(tempFilePath, buffer);
        // Remove a parte do cabeçalho de dados da imagem
        // Realiza o upload da imagem em Base64
        const file = await fileManager.uploadFile(tempFilePath, {
            mimeType: "image/jpeg", // ou "image/png" dependendo da sua imagem
            displayName: 'Jetpack drawing',
        });

        const model = genAi.getGenerativeModel({
            model: "gemini-1.5-pro",
        });

        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: file.file.mimeType,
                    fileUri: file.file.uri
                }
            },
            { text: "Describe how this product might be manufactured." },
        ]);
        return res.status(200).send(result.response.text())
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: 'Failed to process the image' });
    }
};
