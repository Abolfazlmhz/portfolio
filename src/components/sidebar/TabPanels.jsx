import TabPanel from "./TabPanel";
import { motion } from "framer-motion";
import Home from "../../pages/home/Home";
import AboutMe from "../../pages/aboutme/AboutMe";
import Projects from "../../pages/projects/Projects";
import ContactMe from "../../pages/ContactMe";
const TabPanels = ({ activeTab }) => {
  return (
    <>
      <TabPanel value={activeTab} index={0}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
        </motion.div>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutMe />
        </motion.div>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Projects />
        </motion.div>
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactMe />
        </motion.div>
      </TabPanel>
    </>
  );
};

export default TabPanels;
