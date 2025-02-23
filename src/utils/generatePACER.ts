import { HfInference } from "@huggingface/inference";

const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || "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";

if (!API_KEY) {
  console.error("❌ Missing Hugging Face API Key!");
}

const hf = new HfInference(API_KEY);

export const generatePACER = async (text: string): Promise<string[]> => {
  try {
    console.log("⏳ Generating PACER content...");

    const prompts = [
      `Procedural (P): Explain the step-by-step process of ${text}. Include practical examples and suggest exercises for hands-on practice.`,
      `Analogous (A): Relate ${text} to something I already know. Use analogies or comparisons to strengthen connections.`,
      `Conceptual (C): Define the core principles, theories, or facts behind ${text}. Use mind maps or structured breakdowns to aid retention.`,
      `Evidence (E): Provide historical context, real-world applications, or factual details that reinforce understanding of ${text}.`,
      `Reference (R): List essential formulas, key definitions, or minor details related to ${text} that are important but don’t need deep memorization.`,
    ];

    const responses = await Promise.all(
      prompts.map(async (prompt) => {
        try {
          const response = await hf.textGeneration({
            model: "tiiuae/falcon-7b-instruct",
            inputs: prompt,
            parameters: { max_length: 500 },
          });
          return response?.generated_text || "Error: No response received.";
        } catch (err) {
          console.error("❌ Error in API call:", err);
          return "Error: Failed to generate content.";
        }
      })
    );

    console.log("✅ API Responses:", responses);
    return responses;
  } catch (error) {
    console.error("❌ Error:", error);
    return Array(5).fill("Error generating content.");
  }
};
