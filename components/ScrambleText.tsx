import React, { useRef, useState, useCallback } from 'react';

const CYCLES = 2;
const SHUFFLE_TIME = 30;
const CHARS = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const ScrambleLetter: React.FC<{ char: string }> = ({ char }) => {
  const [displayChar, setDisplayChar] = useState(char);
  const intervalRef = useRef<number | null>(null);
  const isScrambling = useRef(false);

  const scramble = useCallback(() => {
    // Don't scramble spaces or if already animating
    if (char === ' ' || isScrambling.current) return;

    isScrambling.current = true;
    let count = 0;

    intervalRef.current = window.setInterval(() => {
      // End animation
      if (count > CYCLES) {
        clearInterval(intervalRef.current!);
        setDisplayChar(char);
        isScrambling.current = false;
        return;
      }

      // Scramble
      const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
      setDisplayChar(randomChar);
      count++;
    }, SHUFFLE_TIME);
  }, [char]);

  return (
    <span 
      onMouseEnter={scramble}
      className="inline-block whitespace-pre cursor-default"
      style={{ minWidth: char === ' ' ? '0.3em' : 'auto' }}
    >
      {displayChar}
    </span>
  );
};

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  return (
    <span className={`${className} inline-flex flex-wrap`}>
      {text.split('').map((char, index) => (
        <ScrambleLetter key={`${index}-${char}`} char={char} />
      ))}
    </span>
  );
};

export default ScrambleText;