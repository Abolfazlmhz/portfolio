import React, { useState } from "react";
import { Grid, Button, Drawer, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import TabPanels from "./TabPanels";

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
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
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
          <>
            <Button
              onClick={() => setDrawerOpen(true)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "primary.main",
                bgcolor: "background.paper",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                minWidth: "unset",
                boxShadow: 3,
              }}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "50%",
                  bgcolor: "background.paper",
                  boxShadow: 3,
                  direction: "ltr",
                },
              }}
              SlideProps={{
                direction: "right",
              }}
            >
              <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
            </Drawer>
            <TabPanels activeTab={activeTab} />
          </>
        ) : (
          <TabPanels activeTab={activeTab} />
        )}
      </Grid>
    </Grid>
  );
}

export default Layout;
