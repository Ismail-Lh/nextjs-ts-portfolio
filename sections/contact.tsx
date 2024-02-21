/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { motion } from 'framer-motion';

import useInViewSection from '@/hooks/useInViewSection';
import ContactForm from '@/components/contactForm';
import SectionTitle from '@/components/sectionTitle';

function ContactSection() {
  const ref = useInViewSection({ sectionName: 'Contact' });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[min(100%, 38rem)] mb-28 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionTitle title="Contact Me" />
      <p className="-mt-5 text-gray-700">
        Please contact me directly at{' '}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{' '}
        or through this form below.
      </p>

      <ContactForm />
    </motion.section>
  );
}

export default ContactSection;
