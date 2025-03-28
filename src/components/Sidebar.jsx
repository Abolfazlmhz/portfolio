import { Tab, Tabs, Box, Divider, Typography } from "@mui/material";
import Social from "./Social";
import { Home, Info, Build, ContactMail } from "@mui/icons-material";

const Sidebar = ({ activeTab, onTabChange }) => {
  const setTab = (event, value) => {
    onTabChange(value);
  };
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
        وبسایت شخصی
        <br /> ابوالفضل محمدی زاده
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
        <Tab icon={<Home sx={{ fontSize: "18px" }} />} label="صفحه اصلی" />
        <Tab icon={<Info sx={{ fontSize: "18px" }} />} label="درباره من" />
        <Tab icon={<Build sx={{ fontSize: "18px" }} />} label="پروژه‌ها" />
        <Tab
          icon={<ContactMail sx={{ fontSize: "18px" }} />}
          label="ارتباط با من"
        />
      </Tabs>
      <Divider />
      <Social />
      <Divider />
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: "auto",
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
