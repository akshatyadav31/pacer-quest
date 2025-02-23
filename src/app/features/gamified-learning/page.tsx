"use client";
import { useState } from "react";
import Link from "next/link";
import { generateQuiz } from "@/utils/generateQuiz";

export default function GamifiedLearning() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [pacerContent, setPacerContent] = useState<string[]>([]);
  const [quiz, setQuiz] = useState("");

  const handleGenerateQuiz = async () => {
    if (!topic) return;
    setQuizLoading(true);
    const quizData = await generateQuiz(topic);
    setQuiz(quizData);
    setQuizLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        Gamified Learning
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Engage with interactive quizzes, rewards, and AI-generated challenges.
      </p>

      <div className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />

        <button
          onClick={handleGenerateQuiz}
          className="w-full mt-4 px-6 py-3 text-white bg-green-600 rounded-lg"
          disabled={quizLoading}
        >
          {quizLoading ? "Generating Quiz..." : "Generate Quiz"}
        </button>
      </div>

      {pacerContent.length > 0 && (
        <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            PACER Breakdown
          </h2>
          {pacerContent.map((item, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300 mb-2">
              {item}
            </p>
          ))}
        </div>
      )}

      {quiz && (
        <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            AI-Generated Quiz
          </h2>
          <pre className="whitespace-pre-wrap text-gray-600 dark:text-gray-300">{quiz}</pre>
        </div>
      )}

      {/* New "Get Started" Button */}
      <div className="text-center mt-10">
        <Link href="/features" className="px-6 py-3 text-white bg-indigo-600 rounded-lg">
            Back to Features
        </Link>
      </div>
    </div>
  );
}
