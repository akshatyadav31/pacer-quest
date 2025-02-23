"use client";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Flashcards",
      description: "Automatically convert text into interactive learning flashcards.",
      icon: "/img/fci.svg",
      link: "/features/ai-powered-flashcards", // Add link to the page
    },
    {
      title: "Memory Card Game",
      description: "Memory Card Game for retention improvements.",
      icon: "/img/gl.svg",
      link: "/features/adaptive-learning",
    },
    {
      title: "Gamified Learning",
      description: "Engage with your learning through interactive quizzes and rewards.",
      icon: "/img/gl.svg",
      link: "/features/gamified-learning",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        Features
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore the powerful features that make learning interactive and efficient.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Link href={feature.link} key={index}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition">
              <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mx-auto mb-4"/>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="px-6 py-3 text-white bg-indigo-600 rounded-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
}
