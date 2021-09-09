import React from "react";
import { motion } from "framer-motion";
import AnimatedTemp from "./AnimatedTemp";

const ForecastDay = ({ index, data }) => {
  const { dt, temp, description, icon } = data;
  return (
    <motion.article
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -10, opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 * index }}
    >
      {/* Multiply by 1000 to get correct date */}
      <p>{new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" })}</p>
      <AnimatedTemp temp={temp} />
      <div>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
        <p>{description}</p>
      </div>
    </motion.article>
  );
};

export default ForecastDay;
