'use client';

import { Fragment } from 'react';

import { projectsData } from '@/lib/data';
import useInViewSection from '@/hooks/useInViewSection';
import ProjectCard from '@/components/projectCard';
import SectionTitle from '@/components/sectionTitle';

function ProjectsSection() {
  const ref = useInViewSection({ sectionName: 'Projects', threshold: 0.5 });

  return (
    <section className="mb-28 scroll-mt-28" id="projects" ref={ref}>
      <SectionTitle title="my projects" />
      <div>
        {projectsData.map((data) => (
          <Fragment key={data.title}>
            <ProjectCard {...data} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
