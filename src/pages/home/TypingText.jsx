import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingText = ({ text, speed, fontSize, color, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
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
    }, delay);
    return () => clearTimeout(timer);
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
