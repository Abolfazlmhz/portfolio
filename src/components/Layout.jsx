import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import TabPanels from "./TabPanels";
import DrawerPanel from "./DrawerPanel";

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
    <Grid container sx={{ height: "100vh", overflowX: "hidden" }}>
      <Grid
        size={{
          xs: 0,
          sm: 4,
          md: 3,
        }}
        sx={{
          bgcolor: "background.paper",
          color: "white",
          display: { xs: "none", sm: "block" },
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </Grid>

      <Grid
        size={{
          xs: 12,
          sm: 8,
          md: 9,
        }}
        sx={{
          bgcolor: "background.default",
          height: "100%",
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
