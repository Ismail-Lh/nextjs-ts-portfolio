'use client';

import Link from 'next/link';
import { useActiveSectionContext } from '@/context/activeSectionContext';
import type { SectionNameType } from '@/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { links } from '@/lib/data';

type NavLinkProps = {
  name: SectionNameType;
  linkHref: (typeof links)[number]['hash'];
};

function NavLink({ name, linkHref }: NavLinkProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.li
      key={linkHref}
      className="relative flex h-3/4 items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        href={linkHref}
        className={clsx(
          'flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
          { 'text-gray-950 dark:text-gray-200': name === activeSection }
        )}
        onClick={() => {
          setActiveSection(name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {name}
        {name === activeSection && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
            layoutId="activeSection"
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.li>
  );
}

export default NavLink;
