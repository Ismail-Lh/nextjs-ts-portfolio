'use client';

import useInViewSection from '@/hooks/useInViewSection';
import IntroHeading from '@/components/introHeading';
import IntroImage from '@/components/introImage';
import IntroLinks from '@/components/introLinks';

function IntroSection() {
  const ref = useInViewSection({ sectionName: 'Home', threshold: 0.5 });

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      <IntroImage />

      <IntroHeading />

      <IntroLinks />
    </section>
  );
}

export default IntroSection;
