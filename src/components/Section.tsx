"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  container?: boolean;
}

export function Section({ children, className, container = true, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-fluid-section pointer-events-none", className)}
      {...props}
    >
      <div className={cn(container && "container-px", "pointer-events-auto")}>
        {children}
      </div>
    </motion.section>
  );
}
