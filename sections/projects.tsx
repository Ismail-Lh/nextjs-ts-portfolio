import { Fragment } from 'react';

import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projectCard';
import SectionTitle from '@/components/sectionTitle';

function ProjectsSection() {
  return (
    <section className="mb-28 sm:mb-40">
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
