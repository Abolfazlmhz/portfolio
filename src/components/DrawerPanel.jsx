import MenuIcon from "@mui/icons-material/Menu";
import { Button, Drawer } from "@mui/material";
import Sidebar from "./Sidebar";
import TabPanels from "./TabPanels";
const DrawerPanel = ({setDrawerOpen, isDrawerOpen,activeTab,handleTabChange}) => {
  return (
    <>
      <Button
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          top: "10px",
          right: "10px",
          color: "primary.main",
          bgcolor: "background.paper",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          minWidth: "unset",
          boxShadow: 3,
          zIndex: 10,
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
  );
};
export default DrawerPanel;