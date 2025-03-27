import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
const Sidebar = ({ onTabChange }) => {
  const [value, setValue] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const setTab = (event, value) => {
    setValue(value);
    onTabChange(value);
    setDrawerOpen(false);
  };
  return (
    <Box>
      <Tabs
        orientation="vertical"
        onChange={setTab}
        value={value}
        sx={{
          "& .MuiTab-root": {
            color: "primary.main",
          },
          "& .MuiTabs-indicator": {},
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
    </Box>
  );
};
export default Sidebar;
