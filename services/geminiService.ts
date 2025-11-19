import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini Client
// Assuming process.env.API_KEY is available as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

let chatSession: Chat | null = null;

export const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Error: API Key no configurada en el entorno. Por favor contacta al administrador.";
    }
    const session = getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "El Oráculo está meditando... intenta de nuevo.";
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return "Lo siento, hubo una interferencia en la comunicación psíquica (Error de API).";
  }
};
