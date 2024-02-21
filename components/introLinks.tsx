import Link from 'next/link';
import { useActiveSectionContext } from '@/context/activeSectionContext';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import SocialLink from './socialLink';

function IntroLinks() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Link
        href="#contact"
        className="group flex items-center gap-2 rounded-full border border-black/10 bg-gray-900 px-7 py-3 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}
      >
        Contact me here{' '}
        <BsArrowRight className="opacity-70 transition group-hover:translate-x-2" />
      </Link>
      <a
        href="/"
        className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition-all hover:scale-110  focus:scale-110 active:scale-105"
      >
        Download CV{' '}
        <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
      </a>

      <SocialLink
        link="https://www.linkedin.com/feed/?trk=nav_logo"
        icon={BsLinkedin}
      />

      <SocialLink
        link="https://github.com/"
        icon={FaGithubSquare}
        textStyle="text-[1.35rem]"
      />
    </motion.div>
  );
}

export default IntroLinks;
