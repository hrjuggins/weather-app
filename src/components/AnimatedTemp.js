import React from "react";
import { motion } from "framer-motion";

const AnimatedTemp = ({ temp }) => (
  <motion.p
    key={temp}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      ease: "easeOut",
      duration: 1,
    }}
  >
    {temp.toString().slice(0, 2)}°
  </motion.p>
);

export default AnimatedTemp;
