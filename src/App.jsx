import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--mainColor)] text-[var(--fontColor)] selection:bg-indigo-600 selection:text-white">
      {/* Permanently Fixed Top Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Structural Container with pt-16 offset for fixed navbar */}
      <main className="max-w-7xl mx-auto border-x border-[var(--borderColor)] pt-16">
        {/* Section 1: Hero & Profile */}
        <Hero />

        {/* Section 2: Projects Showcase with Live Tag Filtering */}
        <Projects />

        {/* Section 3: Work Experience & Education Interactive Tabs */}
        <Experience />

        {/* Section 4: Contact & Social Profiles */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sharp Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
