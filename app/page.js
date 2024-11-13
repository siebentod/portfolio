import Header from './_components/Header';
import FeaturedProjects from './_components/FeaturedProjects';
import AboutMe from './_components/AboutMe';
import Skills from './_components/Skills';
import Footer from './_components/Footer';
import Hero from './_components/Hero';

export const metadata = {
  title: 'Front-End Developer | Portfolio',
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
}
