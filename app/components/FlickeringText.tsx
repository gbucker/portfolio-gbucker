"use client";

import React, { useEffect, useState } from 'react';
import './FlickeringText.css'; // Import CSS file containing the animation styles

const FlickeringText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const characters = [
    '\u2716',
    '\uD83D\uDE43',
    '\uD83D\uDCA3',
    '\uD83D\uDCF9',
    '\u2795',
    '\uD83D\uDE02',
    '\uD83C\uDF46',
    '\uD83C\uDF89'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [characters.length]);

  return (
    <span className="flickerText">
      {characters[currentIndex]}
    </span>
  );
};

export default FlickeringText;
