import { Box, Typography, Grid, Divider } from "@mui/material";
import myphoto from "../../assets/photos/myphoto.jpg";
import MyTimeline from "./MyTimeLine";
import SkillProgress from "./SkillProgress";
import { useTranslation } from "react-i18next";
const AboutMe = () => {
  const { t } = useTranslation(); 
  return (
    <Box sx={{ px: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "35px",
          textAlign: "center",
          my: "2rem",
        }}
      >
        {t("about_me.about_me_title")}
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Typography
        variant="body1"
        sx={{
          px: "2rem",
        }}
      >
       {t("about_me.about_me_discribe")}
      </Typography>
      <Divider sx={{ my: "1rem" }} />
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
      <Divider sx={{ my: "1rem" }} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "30px",
          textAlign: "center",
          my: "1rem",
        }}
      >
        {t("about_me.skills")}
      </Typography>
      <SkillProgress />
      <Divider sx={{ my: "1rem" }} />
    </Box>
  );
};
export default AboutMe;
