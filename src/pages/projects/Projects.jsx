import {
  Typography,
  Button,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import BookListLight from "../../assets/photos/booklistlight.png";
import BookListDark from "../../assets/photos/booklistdark.png";
import portfolioLight from "../../assets/photos/portfoliolight.png";
import portfolioDark from "../../assets/photos/portfoliodark.png";
import quizdark from "../../assets/photos/quizdark.png";
import quizlight from "../../assets/photos/quizlight.png";
import dooz from "../../assets/photos/dooz.png";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectsArray = [
    {
      title: t("projects.booklist"),
      description: t("projects.booklistdiscribe"),
      images: [BookListLight, BookListDark],
      github: "https://github.com/Abolfazlmhz/BookList-bootstrap",
    },
    {
      title: t("projects.portfolio"),
      description: t("projects.portfoliodescribe"),
      images: [portfolioLight, portfolioDark],
      github: "https://github.com/Abolfazlmhz/portfolio",
    },
    {
      title: t("projects.dooz"),
      description: t("projects.doozdescribe"),
      images: [dooz],
      github: "https://github.com/Abolfazlmhz/cpp",
    },
    {
      title: t("projects.quiz"),
      description: t("projects.quizdescribe"),
      images: [quizlight, quizdark],
      github: "https://github.com/Abolfazlmhz/quiz-app",
    },
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const handleOpenDialog = (description) => {
    setCurrentDescription(description);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentDescription("");
  };
  return (
    <Box sx={{ p: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        {t("projects.projects")}
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Box
        sx={{
          display: "flex",
          mt: "2rem",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projectsArray.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            handleOpenDialog={handleOpenDialog}
          />
        ))}
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle
          color="primary"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {t("projects.fulldescribtion")}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {currentDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            {t("projects.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Projects;
