import Image from 'next/image';
import { motion } from 'framer-motion';

function IntroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
            alt="Profile Image"
            width="192"
            height="192"
            quality="95"
            priority
          />
        </motion.div>
        <motion.span
          className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </div>
    </div>
  );
}

export default IntroImage;
