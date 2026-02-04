import React from 'react';
import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
}

const WordReveal: React.FC<WordRevealProps> = ({ text, className, delay = 0, as: Component = "div" }) => {
  const words = text.split(" ");
  return (
    <Component className={`${className} inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 15 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 0.6, delay: delay + i * 0.04, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export default WordReveal;