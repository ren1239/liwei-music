import React from "react";
import styles from "./Gallery.styles.module.scss";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface galleryProps {
  mousePosition: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  handle: string;
}

export default function Gallery({ mousePosition, handle }: galleryProps) {
  const { x, y } = mousePosition;
  return (
    <div className="bg-black">
      <div className={styles.gallery}>
        <div className={styles.imageContainer}>
          <Image src={`/${handle}/background.png`} alt="image" fill />
        </div>
        <motion.div style={{ x: x, y: y }} className={styles.vignette}>
          {/* <Image src={`/${handle}/1.png`} alt="image" fill /> */}
          <video src={`${handle}/liwei.mp4`} autoPlay loop muted playsInline />
        </motion.div>
      </div>
    </div>
  );
}
