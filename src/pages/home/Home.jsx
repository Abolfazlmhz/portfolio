import { Box } from "@mui/material";
import homeImage from "../../assets/photos/Home.png";
import TypingText from "./TypingText";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "100vh",
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(1.2)",
      }}
    >
      <TypingText
        text={t("home.home1")}
        speed={70}
        fontSize="30px"
        color="primary.main"
      />

      <TypingText
        text={t("home.home2")}
        speed={70}
        fontSize="25px"
        color="secondary.main"
        delay={2000}
      />
    </Box>
  );
};
export default Home;
