import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { GitHub } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
const ProjectCard = ({ project, handleOpenDialog }) => {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "2rem",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {project.images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="Book List"
                sx={{
                  objectFit: "cover",
                  objectPosition: "90%",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary"
            sx={{ textAlign: "center", mb: ".5rem", fontWeight: "bold" }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </Typography>
          <Button
            size="small"
            color="secondary"
            sx={{ mt: "0.5rem", display: "block", mx: "auto" }}
            onClick={() => handleOpenDialog(project.description)}
          >
            {t("projects.showmore")}
          </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={project.github}
          startIcon={<GitHub sx={{ ml: 0.7, mr: 0.7 }} />}
          target="_blank"
          sx={{
            margin: "0 auto",
            fontWeight: "bold",
            "& .MuiButton-startIcon": {
              margin: 0,
            },
          }}
        >
          {t("projects.showingithub")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
