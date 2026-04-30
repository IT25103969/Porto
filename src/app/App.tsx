import { useEffect } from 'react';
=======
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
import { Nav } from './components/Nav';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { HorizontalBentoGrid } from './components/HorizontalBentoGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
<<<<<<< HEAD
import { SectionReveal } from './components/SectionReveal';
import { ScrollProgress } from './components/ScrollProgress';
import { PageTransition } from './components/PageTransition';

export default function App() {
  useEffect(() => {
    document.title = 'shihaz shaheem||';
  }, []);

  return (
    <div className="size-full overflow-x-hidden bg-white">
      <PageTransition />
      <ScrollProgress />
      <Nav />
      <HeroSection />
      <SectionReveal>
        <Marquee />
      </SectionReveal>
      <SectionReveal>
        <AboutSection />
      </SectionReveal>
      <SectionReveal>
        <HorizontalBentoGrid />
      </SectionReveal>
      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}
=======

export default function App() {
  return (
    <div className="size-full overflow-x-hidden bg-white">
      <Nav />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <HorizontalBentoGrid />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
