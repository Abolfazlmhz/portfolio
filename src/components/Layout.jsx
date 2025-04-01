import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import TabPanels from "./sidebar/TabPanels";
import DrawerPanel from "./sidebar/DrawerPanel";
import { useTranslation } from "react-i18next";

function Layout() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setDrawerOpen(false);
  };
  return (
    <Grid
      container
      dir={i18n.language === "fa" ? "ltr" : "rtl"}
      sx={{
        overflowX: "hidden",
      }}
    >
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
          right: i18n.language === "fa" ? 0 : "auto",
          left: i18n.language === "fa" ? "auto" : 0,
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
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        sx={{
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
