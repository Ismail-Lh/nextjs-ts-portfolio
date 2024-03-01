import { projectsData } from '@/lib/data';
import TechTags from './techTags';

type ProjectDescriptionProps = {
  title: (typeof projectsData)[number]['title'];
  description: (typeof projectsData)[number]['description'];
  tags: (typeof projectsData)[number]['tags'];
};

function ProjectDescription({
  title,
  description,
  tags,
}: ProjectDescriptionProps) {
  return (
    <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] group-even:w-full  sm:pl-10 sm:pr-2 sm:pt-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
        {description}
      </p>

      <TechTags tags={tags} />
    </div>
  );
}

export default ProjectDescription;
