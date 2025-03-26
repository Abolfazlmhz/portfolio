import React from "react";
import Grid from "@mui/material/Grid";

function Layout() {
  return (
    <Grid container spacing={5} sx={{ height: "100vh"}}>
      <Grid
        xs={0}
        sm={2}
        md={3}
        sx={{
          bgcolor: "primary.main",
          color: "white",
          display: { xs: "none", sm: "block" },
          p: 2,
          height: "100%",
        }}
      >
        Sidebar Content
      </Grid>

      <Grid
        xs={12}
        sm={10}
        md={9}
        sx={{
          bgcolor: "background.paper",
          p: 2,
          height: "100%",
        }}
      >
        Main Content
      </Grid>
    </Grid>
  );
}

export default Layout;
