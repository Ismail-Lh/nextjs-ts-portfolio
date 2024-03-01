import { projectsData } from '@/lib/data';

type TechTagsProps = {
  tags: (typeof projectsData)[number]['tags'];
};

function TechTags({ tags }: TechTagsProps) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TechTags;
