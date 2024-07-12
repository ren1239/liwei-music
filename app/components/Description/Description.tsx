import React, { useState } from "react";
import styles from "./Desription.styles.module.scss";
import Image from "next/image";
import { motion, MotionValue, useScroll } from "framer-motion";

interface descriptionProps {
  mousePosition: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  projects: {
    name: string;
    handle: string;
  }[];
}

export default function Description({
  mousePosition,
  projects,
}: descriptionProps) {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;

  return (
    <div className=" ">
      <div className={styles.description}>
        <div className={styles.descriptionContainer}>
          {projects.map((project, i) => {
            return (
              <p onMouseOver={() => setIndex(i)} key={i}>
                {project.name}
              </p>
            );
          })}
        </div>
        <motion.div style={{ x: x, y: y }} className={styles.vignette}>
          <Image src={`/${projects[index].handle}/1.png`} alt="image" fill />
        </motion.div>
      </div>
    </div>
  );
}
