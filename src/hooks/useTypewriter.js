import { useState, useEffect } from 'react';

export function useTypewriter(
  words = ['Software Engineer.', 'Designer.', 'Student.'],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDelay = 1500
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      // Typing characters
      if (currentText === fullWord) {
        // Pausing at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      } else {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return { currentText, isDeleting, currentWord: words[wordIndex] };
}
