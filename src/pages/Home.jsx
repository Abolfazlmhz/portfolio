import { Typography, Box } from "@mui/material";
import heroImage from "../assets/photos/Home.png";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "80vh",
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: "cover", 
              backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "25px", fontWeight: "bolder", color: "primary.main" }}
      >
        سلام، من ابوالفضل هستم.
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "25px", color: "secondary.main" }}
      >
        توسعه‌دهنده‌ی فرانت‌اند.
      </Typography>
    </Box>
  );
};
export default Home;
