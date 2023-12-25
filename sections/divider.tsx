'use client';

import { motion } from 'framer-motion';

function DividerSection() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}

export default DividerSection;
