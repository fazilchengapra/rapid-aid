import dotenv from "dotenv"
dotenv.config()
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEN_AI_API_KEY) {
  throw new Error("GEN_AI_API_KEY is not defined in the environment variables.");
}
const genAI = new GoogleGenerativeAI(process.env.GEN_AI_API_KEY);

export async function main({ message }:{ message: string }) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "From now on, you are a healthcare assistant. Only answer questions related to health, medicine, fitness, mental health, and related topics. Politely refuse to answer anything outside healthcare." }],
        },
        {
          role: "model",
          parts: [{ text: "Understood! I will only assist with healthcare-related queries." }],
        },
      ],
    });
  
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = await response.text();
    return text; // <-- important: return the text
  }
