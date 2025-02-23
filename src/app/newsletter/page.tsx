// "use client";
// import { useState, useEffect } from "react";
// import { generateNewsletter } from "@/utils/generateNewsletter";

// export default function NewsletterPage() {
//   const [articles, setArticles] = useState<{ title: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       const generatedArticles = await generateNewsletter();
//       setArticles(generatedArticles);
//       setLoading(false);
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
//         AI-Powered Newsletters 📰
//       </h1>
//       <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
//         Stay updated with the latest AI insights, trends, and breakthroughs.
//       </p>

//       {loading ? (
//         <p className="text-center text-gray-600 dark:text-gray-300">Loading articles...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map((article, index) => (
//             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                 {article.title}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300">{article.content}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

interface Newsletter {
  title: string;
  content: string;
  date: string;
  tags?: string[];
}

export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsletters() {
      try {
        const res = await fetch("/api/newsletters");
        const data = await res.json();
        setNewsletters(data);
      } catch (error) {
        console.error("❌ Error fetching newsletters:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNewsletters();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Newsletters</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((article, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{article.content.slice(0, 150)}...</p>
              <p className="text-sm text-gray-500">Published on: {new Date(article.date).toDateString()}</p>
              {article.tags && (
                <div className="mt-2">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-indigo-500 text-white rounded-md mr-2">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
