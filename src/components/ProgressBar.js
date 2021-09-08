import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress, duration }) => {
  console.log(progress);
  return (
    <>
      <p>Reloading in {progress}s</p>
      <div className="progress-bar ">
        <motion.div
          className="loading-animation"
          animate={{ x: progress >= 0 ? "100%" : 0 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
