'use client';

import { skillsData } from '@/lib/data';
import useInViewSection from '@/hooks/useInViewSection';
import SectionTitle from '@/components/sectionTitle';
import SkillTag from '@/components/skillTag';

function SkillsSection() {
  const ref = useInViewSection({ sectionName: 'Skills' });

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionTitle title="My skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <SkillTag key={skill} skill={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
