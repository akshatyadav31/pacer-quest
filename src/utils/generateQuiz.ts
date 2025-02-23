import { HfInference } from "@huggingface/inference";

const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || "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";

if (!API_KEY) {
  console.error("❌ Missing Hugging Face API Key!");
}

const hf = new HfInference(API_KEY);

export const generateQuiz = async (topic: string) => {
  try {
    console.log("⏳ Generating quiz for:", topic);

    const prompt = `Create a multiple-choice quiz on the topic "${topic}". Include 3-4 questions with 4 answer choices each with correct answers.`;

    const response = await hf.textGeneration({
      model: "tiiuae/falcon-7b-instruct",
      inputs: prompt,
      parameters: { max_length: 500 },
    });

    return response?.generated_text || "Error: No quiz generated.";
  } catch (error) {
    console.error("❌ Quiz generation error:", error);
    return "Error: Quiz generation failed.";
  }
};
