import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  try {
    const { prompt } = req.body;
    const filePath = path.join(process.cwd(), "/static-data/cpc.txt");
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Combine the file content and prompt for rich context
    const inputText = `Here is the school's information:\n${fileContent}\n\nQ: ${
      prompt || "Please provide details based on the school's information."
    }`;

    const aiClient = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_AI_KEY);
    const model = await aiClient.getGenerativeModel({
      model: "gemini-1.0-pro",
    });

    const result = await model
      .startChat({
        generationConfig: {
          temperature: 0.7,
          topP: 1,
          maxOutputTokens: 2048,
          responseMimeType: "text/plain",
        },
        history: [],
      })
      .sendMessage(inputText);

    // Check if the response is context-specific or more general
    if (!result.response.text().includes("no relevant information found")) {
      res.status(200).json({ message: result.response.text() });
    } else {
      res.status(200).json({ message: "General response related to schools." });
    }
  } catch (error) {
    console.error("Error in AI request:", error);
    res.status(error.status || 500).json({
      message: error.message || "Internal Server Error",
    });
  }
}
