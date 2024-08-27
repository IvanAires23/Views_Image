import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import dotenv from 'dotenv';

dotenv.config();

export const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY || '')

export const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')