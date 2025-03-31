import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Code, Html, Css, Javascript } from "@mui/icons-material";
import SkillItem from "./SkillItem";

const skills = [
  {
    name: "HTML",
    level: 80,
    color: "primary",
    icon: <Html sx={{ verticalAlign: "middle" }} />,
  },
  {
    name: "CSS",
    level: 70,
    color: "secondary",
    icon: <Css sx={{ verticalAlign: "middle" }} />,
  },
  {
    name: "JavaScript",
    level: 60,
    color: "third",
    icon: <Javascript sx={{ verticalAlign: "middle" }} />,
  },
  {
    name: "React",
    level: 60,
    color: "info",
    icon: <Code sx={{ verticalAlign: "middle" }} />,
  },
  {
    name: "C++",
    level: 40,
    color: "error",
    icon: <Code sx={{ verticalAlign: "middle" }} />,
  },
];

const SkillProgress = () => {
  const [animateLevel, setAnimateLevel] = useState(skills.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const intervals = skills.map((skill, index) => {
            const speed = Math.floor(Math.random() * 50) + 50;
            return setInterval(() => {
              setAnimateLevel((prevLevels) => {
                const updatedLevels = [...prevLevels];
                if (updatedLevels[index] >= skill.level) {
                  clearInterval(intervals[index]);
                  updatedLevels[index] = skill.level;
                } else {
                  updatedLevels[index] += 2;
                }
                return updatedLevels;
              });
            }, speed);
          });
          return () => intervals.forEach((interval) => clearInterval(interval));
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        px: "2rem",
      }}
    >
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} progress={animateLevel[index]} />
      ))}
    </Box>
  );
};

export default SkillProgress;
