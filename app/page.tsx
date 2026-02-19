'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [showWish, setShowWish] = useState(false);

  const generateWish = () => {
    if (!name.trim()) return;

    const wishes = [
      `Happy Birthday, ${name}! 🎉 May your day be filled with joy, laughter, and all your favorite things!`,
      `Wishing you a fantastic birthday, ${name}! 🎂 Hope this year brings you endless happiness and success!`,
      `Cheers to another year of amazing adventures, ${name}! 🥳 Have a birthday that's as wonderful as you are!`,
      `Happy Birthday, ${name}! 🎈 May all your dreams come true and your wishes be granted!`,
      `To ${name}, on your special day: May your birthday be the start of a year full of good luck, good health, and much happiness! 🎊`
    ];

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
    setShowWish(true);
  };

  const reset = () => {
    setName('');
    setWish('');
    setShowWish(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            🎉 Birthday Wisher 🎉
          </h1>
          <h2 className='text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2'>Wish Your Closed One Now!</h2>
          <p className="text-gray-600 text-lg">Create magical birthday wishes!</p>
        </div>

        {!showWish ? (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Enter The Birthday Person's Name🎂:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-center text-lg"
                placeholder="e.g., John Doe"
                onKeyPress={(e) => e.key === 'Enter' && generateWish()}
              />
            </div>

            <button
              onClick={generateWish}
              disabled={!name.trim()}
              className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              ✨ Generate Wish ✨
            </button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-linear-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border-2 border-yellow-200">
              <p className="text-lg font-medium text-gray-800 leading-relaxed">
                {wish}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={reset}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                Create Another
              </button>
              <button
                onClick={() => navigator.share ? navigator.share({ text: wish }) : navigator.clipboard.writeText(wish)}
                className="flex-1 bg-linear-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                Share Wish
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Made By Bhumesh</p>
        </div>
      </div>
    </div>
  );
}
