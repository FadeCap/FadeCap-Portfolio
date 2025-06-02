import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#1f212d", "#5f3eb5", "#b8968e", "#6ba391", "#1c1e28"];

export const AuroraHero = ({ children }) => {
  const color = useMotionValue(COLORS[0]);

  // Animate the background color loop
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Track scroll progress and map to Y% of viewport
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Make gradient center follow scroll on Y-axis
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% ${yPos}%, #1e1e2e, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="bg-base p-0 flex flex-col justify-center items-center text-rosewater"
    >
      {children}
    </motion.section>
  );
};
