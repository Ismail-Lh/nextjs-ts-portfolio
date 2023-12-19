'use client';

import IntroHeading from '@/components/IntroHeading';
import IntroImage from '@/components/introImage';
import IntroLinks from '@/components/introLinks';

function IntroSection() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <IntroImage />

      <IntroHeading />

      <IntroLinks />
    </section>
  );
}

export default IntroSection;
