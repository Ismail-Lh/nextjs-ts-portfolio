'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectsSectionContainerProps = {
  children: ReactNode;
};

function ProjectCardContainer({ children }: ProjectsSectionContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    // The element to be animated
    target: sectionRef,
    // When the animation should start
    offset: ['0 1', '1.33 1'],
  });

  // Start the scale transform from 80% to 100%
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Start the opacity transform from 60% to 100%
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      {children}
    </motion.section>
  );
}

export default ProjectCardContainer;
