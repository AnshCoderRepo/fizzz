import './globals.css';
import useAnimations from './useAnimations';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ScrollSection from './ScrollSection';
import AboutSection from './AboutSection';

const App = () => {
  useAnimations();

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="progress-bar" id="progressBar" />

      {/* Custom Cursor */}
      <div className="cursor" id="cursor" />
      <div className="cursor-follower" id="cursorFollower" />

      {/* Page Sections */}
      <Navbar />
      <HeroSection />
      <ScrollSection />
      <AboutSection />
    </>
  );
};

export default App;
