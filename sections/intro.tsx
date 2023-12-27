'use client';

import IntroHeading from '@/components/introHeading';
import IntroImage from '@/components/introImage';
import IntroLinks from '@/components/introLinks';

function IntroSection() {
  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <IntroImage />

      <IntroHeading />

      <IntroLinks />
    </section>
  );
}

export default IntroSection;
