import { Tab, Tabs, Box, Divider, Typography } from "@mui/material";
import Social from "./Social";
import { Home, Info, Build, ContactMail } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Sidebar = ({ activeTab, onTabChange }) => {
  const setTab = (event, value) => {
    onTabChange(value);
  };
  const { t } = useTranslation();
  return (
    <Box sx={{ bgcolor: "Background.paper" }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          animation: "rotate .7s ease-in",
          my: 2,
          px: 2,
          fontWeight: "bolder",
          fontSize: 24,
          lineHeight: 2,
          color: "primary.main",
        }}
      >
        {t("sidebar.web")}
        <br /> {t("sidebar.myname")}
      </Typography>
      <Divider />
      <Tabs
        orientation="vertical"
        onChange={setTab}
        value={activeTab}
        sx={{
          "& .MuiTab-root": {
            display: "flex",
            flexDirection: "row-reverse",
            gap: ".7rem",
            alignItems: "center",
            color: "primary.main",
            fontSize: "16px",
            m: 0.5,
          },
          "& .MuiTab-root.Mui-selected": {
            color: "white",
            bgcolor: "primary.main",
            fontWeight: "bold",
            transform: "scale(1.1)",
            transition: "transform 0.5s ease-in-out",
          },
          "& .MuiTab-iconWrapper": {
            marginBottom: "0 !important",
          },
        }}
      >
        <Tab
          icon={<Home sx={{ fontSize: "18px" }} />}
          label={t("home.mainpage")}
        />
        <Tab
          icon={<Info sx={{ fontSize: "18px" }} />}
          label={t("about_me.about_me_title")}
        />
        <Tab
          icon={<Build sx={{ fontSize: "18px" }} />}
          label={t("projects.projects")}
        />
        <Tab
          icon={<ContactMail sx={{ fontSize: "18px" }} />}
          label={t("contact.contactme")}
        />
      </Tabs>
      <Divider />
      <Social />
      <Divider />
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          animation: "fade-in 2s forwards",
          p: 2,
          fontSize: "14px",
          color: "text.secondary",
          direction: "ltr",
        }}
      >
        Made with ❤️
        <br /> Abolfazl Mohammadi Zadeh
        <br /> © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
};
export default Sidebar;
