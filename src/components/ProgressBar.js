import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress, duration }) => (
  <div className="progress-container">
    <p>Reloading in {progress}s</p>
    <div className="progress-bar">
      <motion.div
        className="progress-bar-animation"
        animate={{ x: progress >= 0 ? "100%" : 0 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
);

export default ProgressBar;
