"use client";
import { useState } from "react";
import { generatePACER } from "@/utils/generatePACER"; // Ensure the function is in utils folder
import Link from "next/link";

export default function AIPoweredFlashcards() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pacerContent, setPacerContent] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const results = await generatePACER(input);
    setPacerContent(results);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        AI-Powered Flashcards
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Convert your study materials into AI-generated flashcards for better retention.
      </p>

      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter a topic (e.g., Quantum Computing)"
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg text-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate PACER Flashcards"}
        </button>
      </div>

      {/* Display PACER Flashcards */}
      {pacerContent.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Procedural", "Analogous", "Conceptual", "Evidence", "Reference"].map((type, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-600">{type}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{pacerContent[index]}</p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link href="/features" className="px-6 py-3 text-white bg-indigo-600 rounded-lg">
          Back to Features
        </Link>
      </div>
    </div>
  );
}
