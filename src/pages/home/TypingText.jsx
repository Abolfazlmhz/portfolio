import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingText = ({ text, speed, fontSize, color, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingTimer, setTypingTimer] = useState(null);

  useEffect(() => {
    setDisplayedText("");
    if (typingTimer) {
      clearInterval(typingTimer);
    }
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          const nextChar = text[i];
          setDisplayedText((prev) => prev + nextChar);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      setTypingTimer(interval);
    }, delay);
    return () => {
      clearTimeout(timer);
      clearInterval(typingTimer);
    };
  }, [text, speed, delay]);

  return (
    <Typography
      variant="h2"
      sx={{
        fontSize,
        fontWeight: "bolder",
        color,
      }}
    >
      {displayedText}
    </Typography>
  );
};

export default TypingText;
