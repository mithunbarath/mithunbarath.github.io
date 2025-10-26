import { GoogleGenAI } from "@google/genai";

// This will use the API key from the execution environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (name) => {
  try {
    const prompt = `Write a professional and compelling bio for a computer science graduate named ${name}. The bio should be in the third person, around 4-5 sentences, and highlight expertise in data analytics, machine learning, and full-stack development (React, Node.js). Mention a passion for developing AI-powered healthcare systems. The tone should be innovative, professional, and driven.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    const text = response.text;

    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    return text.trim();
  } catch (error) {
    console.error("Error generating bio with Gemini API:", error);
    // Fallback to a default message in case of an error
    const fallbackBio = `${name} is a motivated and innovative computer science graduate specializing in data analytics, machine learning, and full-stack development. Experienced in developing AI-powered healthcare systems and scalable web platforms, he is passionate about leveraging data-driven insights and technology to solve real-world problems with creativity and precision. With a strong foundation in both frontend and backend technologies, Mithun is dedicated to building impactful and efficient digital solutions.`;
    return fallbackBio;
  }
};
