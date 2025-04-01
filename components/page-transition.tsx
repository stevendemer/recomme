"use client";
import { AnimatePresence, motion, cubicBezier } from "motion/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const PageTransition = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${pathname}${randomNumber}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: cubicBezier(0.65, 0, 0.35, 1) },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0,
            ease: "easeOut",
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
