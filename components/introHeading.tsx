import { motion } from 'framer-motion';

function IntroHeading() {
  return (
    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{' '}
      <span className="font-bold">full-stack developer</span> with{' '}
      <span className="font-bold">8 years</span> of experience. I enjoy building{' '}
      <span className="italic">sites & apps</span>. My focus is{' '}
      <span className="underline">React (Next.js)</span>.
    </motion.h1>
  );
}

export default IntroHeading;
