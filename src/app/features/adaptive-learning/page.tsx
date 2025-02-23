// "use client";

// import React, { useState, useEffect } from "react";

// const images = [
//   "/img/cards/img1.svg",
//   "/img/cards/img2.svg",
//   "/img/cards/img3.svg",
//   "/img/cards/img4.svg",
//   "/img/cards/img5.svg",
//   "/img/cards/img6.svg",
// ];

// const generateCards = () => {
//   const doubledImages = [...images, ...images]; // Duplicate images for matching
//   return doubledImages
//     .map((image, index) => ({ id: index, image, matched: false }))
//     .sort(() => Math.random() - 0.5); // Shuffle cards
// };

// const GamifiedLearning = () => {
//   const [cards, setCards] = useState(generateCards());
//   const [flipped, setFlipped] = useState<number[]>([]);
//   const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
//   const [gameOver, setGameOver] = useState(false);

//   const handleCardClick = (id: number) => {
//     if (flipped.length === 2 || flipped.includes(id) || matchedPairs.includes(id)) return;
//     setFlipped((prev) => [...prev, id]);
//   };

//   useEffect(() => {
//     if (flipped.length === 2) {
//       const [first, second] = flipped;
//       if (cards[first].image === cards[second].image) {
//         setMatchedPairs((prev) => [...prev, first, second]);
//         setCards((prev) =>
//           prev.map((card) =>
//             card.id === first || card.id === second ? { ...card, matched: true } : card
//           )
//         );
//       }
//       setTimeout(() => setFlipped([]), 1000);
//     }
//   }, [flipped, cards]);

//   useEffect(() => {
//     if (matchedPairs.length === cards.length) {
//       setGameOver(true);
//     }
//   }, [matchedPairs, cards]);

//   const restartGame = () => {
//     setCards(generateCards());
//     setFlipped([]);
//     setMatchedPairs([]);
//     setGameOver(false);
//   };

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-6">Memory Card Game</h1>

//       {gameOver && (
//         <div className="mb-4 text-green-600 font-semibold text-lg">🎉 You Won! 🎉</div>
//       )}

//       <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="relative w-40 h-52 sm:w-44 sm:h-56 cursor-pointer"
//             onClick={() => handleCardClick(card.id)}
//           >
//             <div
//               className={`absolute w-full h-full transition-transform duration-500 transform ${
//                 flipped.includes(card.id) || matchedPairs.includes(card.id)
//                   ? "rotate-y-180"
//                   : ""
//               }`}
//             >
//               {flipped.includes(card.id) || matchedPairs.includes(card.id) ? (
//                 <img
//                   src={card.image}
//                   alt="Card"
//                   className="w-full h-full object-cover rounded-xl shadow-md"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-violet-500 rounded-xl flex items-center justify-center text-5xl text-white shadow-md">
//                   ?
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={restartGame}
//         className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
//       >
//         Restart Game 🔄
//       </button>
//     </div>
//   );
// };

// export default GamifiedLearning;




// "use client";

// import React, { useEffect, useState } from "react";

// interface CardType {
//   id: number;
//   image: string;
//   matched: boolean;
// }

// interface CardProps {
//   card: CardType;
//   onClick: (card: CardType) => void;
//   isFillped: boolean;
// }

// const images = [
//   "/img/cards/img1.svg",
//   "/img/cards/img2.svg",
//   "/img/cards/img3.svg",
//   "/img/cards/img4.svg",
//   "/img/cards/img5.svg",
//   "/img/cards/img6.svg",
// ];

// const Card: React.FC<CardProps> = ({ card, onClick, isFillped }) => {
//   return (
//     <div
//       className={`card ${
//         isFillped ? "flipped" : ""
//       } w-24 h-32 lg:w-36 lg:h-44 m-2`}
//       onClick={() => onClick(card)}
//     >
//       <div
//         className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
//           card.matched ? "matched" : ""
//         }`}
//       >
//         {isFillped || card.matched ? (
//           <img
//             src={card.image}
//             alt="card"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         ) : (
//           <div className="bg-violet-400 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
//             ?
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const generateCards = (): CardType[] => {
//   const doubleImages = images.concat(images);
//   const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
//   return shuffledImages.map((image, index) => ({
//     id: index,
//     image,
//     matched: false,
//   }));
// };

// export default function MemoryGame() {
//   const [cards, setCards] = useState<CardType[]>([]);
//   const [filppedCards, setFlippedCards] = useState<CardType[]>([]);
//   const [matchedPairs, setMatchedPairs] = useState<number>(0);
//   const [isChecking, setIsChecking] = useState<boolean>(false);

//   useEffect(() => {
//     const generatedCards = generateCards();
//     setCards(generatedCards);
//   }, []);

//   const handleClick = (clickedCard: CardType): void => {
//     if (
//       isChecking ||
//       filppedCards.some((card) => card.id === clickedCard.id) ||
//       clickedCard.matched
//     ) {
//       return;
//     }

//     const newFillpedCards = [...filppedCards, clickedCard];
//     setFlippedCards(newFillpedCards);

//     if (newFillpedCards.length === 2) {
//       setIsChecking(true);
//       if (newFillpedCards[0].image === newFillpedCards[1].image) {
//         setMatchedPairs(matchedPairs + 1);
//         setCards((prevCards) =>
//           prevCards.map((card) =>
//             newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
//               ? { ...card, matched: true }
//               : card
//           )
//         );
//       }
//       setTimeout(() => {
//         setFlippedCards([]);
//         setIsChecking(false);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="bg-[url('/bg.svg')] bg-center">
//       <div className="container m-auto h-screen flex justify-center items-center">
//         <div className="game-bord grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
//           {cards.map((card) => (
//             <Card
//               key={card.id}
//               onClick={handleClick}
//               card={card}
//               isFillped={
//                 filppedCards.some(
//                   (flippedCard) => flippedCard.id === card.id
//                 ) || card.matched
//               }
//             />
//           ))}
//           {matchedPairs === cards.length / 2 && (
//             <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50">
//               <h1 className="text-3xl font-bold">You Win</h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }










// "use client";

// import React, { useEffect, useState } from "react";

// interface CardType {
//   id: number;
//   image: string;
//   matched: boolean;
// }

// interface CardProps {
//   card: CardType;
//   onClick: (card: CardType) => void;
//   isFillped: boolean;
// }

// const images = [
//   "/img/cards/img1.svg",
//   "/img/cards/img2.svg",
//   "/img/cards/img3.svg",
//   "/img/cards/img4.svg",
//   "/img/cards/img5.svg",
//   "/img/cards/img6.svg",
// ];

// const Card: React.FC<CardProps> = ({ card, onClick, isFillped }) => {
//   return (
//     <div
//       className={`card ${
//         isFillped ? "flipped" : ""
//       } w-24 h-32 lg:w-36 lg:h-44 m-2`}
//       onClick={() => onClick(card)}
//     >
//       <div
//         className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
//           card.matched ? "matched" : ""
//         }`}
//       >
//         {isFillped || card.matched ? (
//           <img
//             src={card.image}
//             alt="card"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         ) : (
//           <div className="bg-violet-400 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
//             ?
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const generateCards = (): CardType[] => {
//   const doubleImages = images.concat(images);
//   const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
//   return shuffledImages.map((image, index) => ({
//     id: index,
//     image,
//     matched: false,
//   }));
// };

// export default function MemoryGame() {
//   const [cards, setCards] = useState<CardType[]>([]);
//   const [filppedCards, setFlippedCards] = useState<CardType[]>([]);
//   const [matchedPairs, setMatchedPairs] = useState<number>(0);
//   const [isChecking, setIsChecking] = useState<boolean>(false);

//   useEffect(() => {
//     const generatedCards = generateCards();
//     setCards(generatedCards);
//   }, []);

//   const handleClick = (clickedCard: CardType): void => {
//     if (
//       isChecking ||
//       filppedCards.some((card) => card.id === clickedCard.id) ||
//       clickedCard.matched
//     ) {
//       return;
//     }

//     const newFillpedCards = [...filppedCards, clickedCard];
//     setFlippedCards(newFillpedCards);

//     if (newFillpedCards.length === 2) {
//       setIsChecking(true);
//       if (newFillpedCards[0].image === newFillpedCards[1].image) {
//         setMatchedPairs(matchedPairs + 1);
//         setCards((prevCards) =>
//           prevCards.map((card) =>
//             newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
//               ? { ...card, matched: true }
//               : card
//           )
//         );
//       }
//       setTimeout(() => {
//         setFlippedCards([]);
//         setIsChecking(false);
//       }, 1000);
//     }
//   };

//   const restartGame = (): void => {
//     const newCards = generateCards();
//     setCards(newCards);
//     setFlippedCards([]);
//     setMatchedPairs(0);
//     setIsChecking(false);
//   };

//   return (
//     <div className="bg-[url('/bg.svg')] bg-center">
//       <div className="container m-auto h-screen flex justify-center items-center">
//         <div className="game-bord grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
//           {cards.map((card) => (
//             <Card
//               key={card.id}
//               onClick={handleClick}
//               card={card}
//               isFillped={
//                 filppedCards.some(
//                   (flippedCard) => flippedCard.id === card.id
//                 ) || card.matched
//               }
//             />
//           ))}
//           {matchedPairs === cards.length / 2 && (
//             <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
//               <h1 className="text-3xl font-bold mb-4">You Win!</h1>
//               <button
//                 onClick={restartGame}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
//               >
//                 Restart Game
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// interface CardType {
//   id: number;
//   image: string;
//   matched: boolean;
// }

// interface CardProps {
//   card: CardType;
//   onClick: (card: CardType) => void;
//   isFillped: boolean;
// }

// const images = [
//   "/img/cards/img1.svg",
//   "/img/cards/img2.svg",
//   "/img/cards/img3.svg",
//   "/img/cards/img4.svg",
//   "/img/cards/img5.svg",
//   "/img/cards/img6.svg",
// ];

// const Card: React.FC<CardProps> = ({ card, onClick, isFillped }) => {
//   return (
//     <div
//       className={`card ${
//         isFillped ? "flipped" : ""
//       } w-24 h-32 lg:w-36 lg:h-44 m-2`}
//       onClick={() => onClick(card)}
//     >
//       <div
//         className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
//           card.matched ? "matched" : ""
//         }`}
//       >
//         {isFillped || card.matched ? (
//           <img
//             src={card.image}
//             alt="card"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         ) : (
//           <div className="bg-violet-400 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
//             ?
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const generateCards = (): CardType[] => {
//   const doubleImages = images.concat(images);
//   const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
//   return shuffledImages.map((image, index) => ({
//     id: index,
//     image,
//     matched: false,
//   }));
// };

// export default function MemoryGame() {
//   const [cards, setCards] = useState<CardType[]>([]);
//   const [filppedCards, setFlippedCards] = useState<CardType[]>([]);
//   const [matchedPairs, setMatchedPairs] = useState<number>(0);
//   const [isChecking, setIsChecking] = useState<boolean>(false);

//   useEffect(() => {
//     const generatedCards = generateCards();
//     setCards(generatedCards);
//   }, []);

//   const handleClick = (clickedCard: CardType): void => {
//     if (
//       isChecking ||
//       filppedCards.some((card) => card.id === clickedCard.id) ||
//       clickedCard.matched
//     ) {
//       return;
//     }

//     const newFillpedCards = [...filppedCards, clickedCard];
//     setFlippedCards(newFillpedCards);

//     if (newFillpedCards.length === 2) {
//       setIsChecking(true);
//       if (newFillpedCards[0].image === newFillpedCards[1].image) {
//         setMatchedPairs(matchedPairs + 1);
//         setCards((prevCards) =>
//           prevCards.map((card) =>
//             newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
//               ? { ...card, matched: true }
//               : card
//           )
//         );
//       }
//       setTimeout(() => {
//         setFlippedCards([]);
//         setIsChecking(false);
//       }, 1000);
//     }
//   };

//   const restartGame = (): void => {
//     const newCards = generateCards();
//     setCards(newCards);
//     setFlippedCards([]);
//     setMatchedPairs(0);
//     setIsChecking(false);
//   };

//   return (
//     <div className="bg-[url('/bg.svg')] bg-center">
//       <div className="container m-auto h-screen flex justify-center items-center">
//         <div className="game-bord grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
//           {cards.map((card) => (
//             <Card
//               key={card.id}
//               onClick={handleClick}
//               card={card}
//               isFillped={
//                 filppedCards.some(
//                   (flippedCard) => flippedCard.id === card.id
//                 ) || card.matched
//               }
//             />
//           ))}
//           {matchedPairs === cards.length / 2 && (
//             <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
//               <h1 className="text-3xl font-bold mb-4">You Win!</h1>
//               <button
//                 onClick={restartGame}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition mb-4"
//               >
//                 Restart Game
//               </button>
//               <Link
//                 href="/features"
//                 className="px-6 py-3 text-white bg-indigo-600 rounded-lg"
//               >
//                 Back to Features
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface CardType {
  id: number;
  image: string;
  matched: boolean;
}

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
  isFillped: boolean;
}

const images = [
  "/img/cards/img1.svg",
  "/img/cards/img2.svg",
  "/img/cards/img3.svg",
  "/img/cards/img4.svg",
  "/img/cards/img5.svg",
  "/img/cards/img6.svg",
];

const Card: React.FC<CardProps> = ({ card, onClick, isFillped }) => {
  return (
    <div
      className={`card ${
        isFillped ? "flipped" : ""
      } w-24 h-32 lg:w-36 lg:h-44 m-2`}
      onClick={() => onClick(card)}
    >
      <div
        className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
          card.matched ? "matched" : ""
        }`}
      >
        {isFillped || card.matched ? (
          <img
            src={card.image}
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="bg-violet-400 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
            ?
          </div>
        )}
      </div>
    </div>
  );
};

const generateCards = (): CardType[] => {
  const doubleImages = images.concat(images);
  const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
  return shuffledImages.map((image, index) => ({
    id: index,
    image,
    matched: false,
  }));
};

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [filppedCards, setFlippedCards] = useState<CardType[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0); // Timer state
  const [isRunning, setIsRunning] = useState<boolean>(false); // Timer running state

  useEffect(() => {
    const generatedCards = generateCards();
    setCards(generatedCards);
    setIsRunning(true); // Start the timer when the game starts
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isRunning]);

  const handleClick = (clickedCard: CardType): void => {
    if (
      isChecking ||
      filppedCards.some((card) => card.id === clickedCard.id) ||
      clickedCard.matched
    ) {
      return;
    }

    const newFillpedCards = [...filppedCards, clickedCard];
    setFlippedCards(newFillpedCards);

    if (newFillpedCards.length === 2) {
      setIsChecking(true);
      if (newFillpedCards[0].image === newFillpedCards[1].image) {
        setMatchedPairs(matchedPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
              ? { ...card, matched: true }
              : card
          )
        );
      }
      setTimeout(() => {
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  const restartGame = (): void => {
    const newCards = generateCards();
    setCards(newCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setIsChecking(false);
    setTime(0); // Reset the timer
    setIsRunning(true); // Restart the timer
  };

  // Format time into minutes and seconds
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="bg-[url('/bg.svg')] bg-center">
      <div className="container m-auto h-screen flex justify-center items-center">
        <div className="game-bord grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {/* Timer Display */}
          <div className="absolute top-3 right-0.5 bg-white bg-opacity-75 px-1 py-2 rounded-lg shadow-md">
            <span className="text-lg font-semibold">Time: {formatTime(time)}</span>
          </div>

          {cards.map((card) => (
            <Card
              key={card.id}
              onClick={handleClick}
              card={card}
              isFillped={
                filppedCards.some(
                  (flippedCard) => flippedCard.id === card.id
                ) || card.matched
              }
            />
          ))}
          {matchedPairs === cards.length / 2 && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
              <h1 className="text-3xl font-bold mb-4">You Win!</h1>
              <p className="text-xl mb-4">Time: {formatTime(time)}</p>
              <button
                onClick={restartGame}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition mb-4"
              >
                Restart Game
              </button>
              <Link
                href="/features"
                className="px-6 py-3 text-white bg-indigo-600 rounded-lg"
              >
                Back to Features
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}