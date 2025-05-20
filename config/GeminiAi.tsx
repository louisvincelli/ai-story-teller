// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

export async function main(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const config = {
    //responseMimeType: 'text/plain',
    responseMimeType: 'application/json',
  };
  const model = 'gemini-2.5-pro-preview-05-06';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let result = '';
  for await (const chunk of response) {
    result += chunk.text;
  }
  return result;
}

