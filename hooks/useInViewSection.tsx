'use client';

import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/activeSectionContext';
import type { SectionNameType } from '@/types';
import { useInView } from 'react-intersection-observer';

type UseInViewSectionProps = {
  sectionName: SectionNameType;
  threshold: number;
};

function useInViewSection({ sectionName, threshold }: UseInViewSectionProps) {
  // Ensure that the threshold is within the range [0, 1]
  const validatedThreshold = Math.min(1, Math.max(0, threshold));

  const { ref, inView } = useInView({ threshold: validatedThreshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return ref;
}

export default useInViewSection;
