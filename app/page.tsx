"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/Gallery";
import { useMotionValue, useSpring } from "framer-motion";
import Description from "./components/Description/Description";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const projects = [
  {
    name: "Arjun Singh",

    handle: "album",
  },

  {
    name: "Klaus Müller",

    handle: "concert",
  },

  {
    name: "Jan Vermeer",

    handle: "tour",
  },
];

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {}, []);

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      <Nav />
      <Footer />
      {projects.map(({ handle }, i) => {
        return (
          <Gallery mousePosition={mousePosition} key={i} handle={handle} />
        );
      })}
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  );
}
