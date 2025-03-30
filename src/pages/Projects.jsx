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
import BookListLight from "../assets/photos/booklistlight.png";
import BookListDark from "../assets/photos/booklistdark.png";
import portfolioLight from "../assets/photos/portfoliolight.png";
import portfolioDark from "../assets/photos/portfoliodark.png";
import dooz from "../assets/photos/dooz.png";
import React, { useState } from "react";

import ProjectCard from "../helpers/ProjectCard";

const projectsArray = [
  {
    title: "کتابخانه",
    description:
      "این کتابخانه با قابلیت افزودن، ویرایش و حذف کتاب و کار با سرور در دو تم روشن و تاریک با ری اکت ابتدایی طراحی شده است.",
    images: [BookListLight, BookListDark],
    github: "https://github.com/Abolfazlmhz/BookList-bootstrap",
  },
  {
    title: "پورتفولیو",
    description:
      "این پورتفولیو با هدف معرفی شخصی با استفاده از ری اکت و MUi در دو تم روشن و تاریک طراحی شده است. این پروژه دارای بخش های صفحه اصلی درباره من پروژه ها و ارتباط با من می باشد.",
    images: [portfolioLight, portfolioDark],
    github: "https://github.com/Abolfazlmhz/portfolio",
  },
  {
    title: "دوز",
    description: "یک پروژه ساده و ابتدایی با c++",
    images: [dooz],
    github: "https://github.com/Abolfazlmhz/cpp",
  },
];

const Projects = () => {
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
        پروژه ها
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
          توضیحات کامل
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {currentDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            بستن
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Projects;
