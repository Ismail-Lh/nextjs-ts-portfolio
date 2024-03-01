import Image from 'next/image';

import { projectsData } from '@/lib/data';
import ProjectCardContainer from './projectCardContainer';
import ProjectDescription from './projectDescription';

type ProjectCardProps = (typeof projectsData)[number];

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <div className="relative grid max-w-[42rem] grid-cols-2 overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:cursor-pointer  hover:bg-gray-200 group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8">
        <ProjectDescription
          title={title}
          description={description}
          tags={tags}
        />

        <Image
          alt={title}
          src={imageUrl}
          quality={95}
          className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2"
        />
      </div>
    </ProjectCardContainer>
  );
}

export default ProjectCard;
