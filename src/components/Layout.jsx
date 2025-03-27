import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
function Layout() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };
  return (
    <Grid container spacing={0} sx={{ height: "100vh", overflowX: "hidden" }}>
      <Grid
        size={{
          xs: 0,
          sm: 2,
          md: 3,
        }}
        sx={{
          bgcolor: "background.paper",
          color: "white",
          display: { xs: "none", sm: "block" },
          p: 2,
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Sidebar onTabChange={handleTabChange} />
      </Grid>

      <Grid
        size={{
          xs: 12,
          sm: 10,
          md: 9,
        }}
        sx={{
          bgcolor: "background.default",
          p: 2,
          height: "100%",
        }}
      >
        <Tabs activeTab={activeTab}/>
      </Grid>
    </Grid>
  );
}

export default Layout;