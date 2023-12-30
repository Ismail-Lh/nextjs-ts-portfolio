'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

type SkillTagProps = {
  skill: (typeof skillsData)[number];
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <motion.li
      className="rounded-xl border border-black/[0.1] bg-white px-5 py-3 uppercase tracking-wide"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {skill}
    </motion.li>
  );
}

export default SkillTag;
