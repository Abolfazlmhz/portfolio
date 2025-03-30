import TabPanel from "./TabPanel";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
const TabPanels = ({activeTab}) => {
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
          <h2>ارتباط با من</h2>
        </motion.div>
      </TabPanel>
    </>
  );
};

export default TabPanels;