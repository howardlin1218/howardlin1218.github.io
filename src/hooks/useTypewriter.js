import { useState, useEffect } from 'react';

const WORDS = ['Software Engineer.', 'Designer.', 'Student.'];
const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_DELAY = 1500;

export function useTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = WORDS[wordIndex];
    let timer;

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }, DELETING_SPEED);
    } else {
      // Typing characters
      if (currentText === fullWord) {
        // Pausing at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DELAY);
      } else {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return { currentText, isDeleting, currentWord: WORDS[wordIndex] };
}
