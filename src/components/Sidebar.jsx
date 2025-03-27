import { Tab, Tabs, Box, Divider, Typography } from "@mui/material";
import Social from "./Social";
const Sidebar = ({ activeTab, onTabChange }) => {
  const setTab = (event, value) => {
    onTabChange(value);
  };
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          my: 2,
          lineHeight: 2,
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
        }}
      >
        <Tab label="صفحه اصلی" />
        <Tab label="درباره من" />
        <Tab label="پروژه ها" />
        <Tab label="ارتباط با من" />
      </Tabs>
      <Divider />
      <Social />
      <Divider />
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: "auto",
          p: 2,
          fontSize: "14px",
          color: "text.secondary",
          direction:"ltr"
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
