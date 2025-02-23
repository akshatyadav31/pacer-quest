import { HfInference } from "@huggingface/inference";

const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || "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";


if (!API_KEY) {
  console.error("❌ Missing Hugging Face API Key!");
}

const hf = new HfInference(API_KEY);

export const generateNewsletter = async () => {
  try {
    console.log("⏳ Fetching AI-generated articles...");

    const topics = [
      "Latest trends in AI",
      "Breakthroughs in machine learning",
      "How AI is transforming education",
      "The future of AI in healthcare",
      "Ethical concerns in artificial intelligence",
      "AI-powered productivity tools",
      "Generative AI and its impact"
    ];

    // Generate multiple articles
    const articles = await Promise.all(
      topics.map(async (topic) => {
        try {
          const prompt = `Write a professional newsletter article about "${topic}".`;

          const response = await hf.textGeneration({
            model: "tiiuae/falcon-7b-instruct",
            inputs: prompt,
            parameters: { max_length: 800 },
          });

          let text = response?.generated_text || "Error: No content generated.";

          // Remove the prompt from the output
          text = text.replace(prompt, "").trim();

          // Extract title (first sentence)
          const firstSentence = text.split(". ")[0] + "."; // Take the first full sentence

          return {
            title: firstSentence || topic, // Use topic as fallback title
            content: text,
          };
        } catch (err) {
          console.error("❌ Error in API call:", err);
          return {
            title: "Error Fetching Article",
            content: "Error: Failed to generate content.",
          };
        }
      })
    );

    console.log("✅ Articles Fetched:", articles);
    return articles;
  } catch (error) {
    console.error("❌ Error:", error);
    return Array(6).fill({
      title: "Error Fetching Article",
      content: "Error fetching articles.",
    });
  }
};
