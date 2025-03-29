import { Box, Typography, Grid } from "@mui/material";
import myphoto from "../assets/photos/myphoto.jpg";
import MyTimeline from "../helpers/MyTimeLine";
const AboutMe = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "35px",
          textAlign: "center",
          my: "1rem",
        }}
      >
        درباره‌ی من
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          p: "2rem",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <Box
            component="img"
            src={myphoto}
            alt="Profile"
            sx={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: 2,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <MyTimeline />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutMe;
