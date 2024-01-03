import AboutSection from '@/sections/about';
import DividerSection from '@/sections/divider';
import ExperienceSection from '@/sections/experience';
import IntroSection from '@/sections/intro';
import ProjectsSection from '@/sections/projects';
import SkillsSection from '@/sections/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <DividerSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
