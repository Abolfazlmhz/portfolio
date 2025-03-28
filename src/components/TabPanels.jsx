import TabPanel from "./TabPanel";
import { motion } from "framer-motion";
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
          <h2>صفحه اصلی</h2>
          <p>صفحه اصلی</p>
        </motion.div>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>درباره من</h2>
        </motion.div>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>پروژه‌ها</h2>
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