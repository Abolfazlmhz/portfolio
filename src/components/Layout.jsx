import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import TabPanels from "./sidebar/TabPanels";
import DrawerPanel from "./sidebar/DrawerPanel";

function Layout() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setDrawerOpen(false);
  };
  return (
    <Grid container sx={{ overflowX: "hidden", direction: "ltr" }}>
      <Grid
        size={{
          xs: 0,
          sm: 4,
          md: 3,
        }}
        sx={{
          bgcolor: "background.paper",
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          color: "white",
          display: { xs: "none", sm: "block" },
          overflowY: "auto",
        }}
      >
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </Grid>

      <Grid
        size={{
          xs: 12,
          sm: 8,
          md: 9,
        }}
        sx={{
          direction: "rtl",
          bgcolor: "background.default",
          "& .css-19kzrtu": {
            p: 0,
          },
        }}
      >
        {isSmallScreen ? (
          <DrawerPanel
            setDrawerOpen={setDrawerOpen}
            isDrawerOpen={isDrawerOpen}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        ) : (
          <TabPanels activeTab={activeTab} />
        )}
      </Grid>
    </Grid>
  );
}

export default Layout;
