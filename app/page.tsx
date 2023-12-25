import DividerSection from '@/sections/divider';
import IntroSection from '@/sections/intro';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <DividerSection />
    </main>
  );
}
