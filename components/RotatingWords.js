// components/RotatingWords.js
import React, { useEffect, useState, useRef } from "react";

const RotatingWords = ({ words, interval = 3000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordIndexRef = useRef(currentWordIndex);

  useEffect(() => {
    const wordRotation = setInterval(() => {
      wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
      setCurrentWordIndex(wordIndexRef.current);
    }, interval);

    return () => clearInterval(wordRotation);
  }, [words, interval]);

  return <span> {words[currentWordIndex]}</span>;
};

export default RotatingWords;
