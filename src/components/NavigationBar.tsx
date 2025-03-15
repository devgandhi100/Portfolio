import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUser, FaProjectDiagram, FaCogs } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const sections = [
  { id: 'overview', icon: <FaUser />, label: 'Home' },
  { id: 'education-experience', icon: <MdSchool />, label: 'Education' },
  { id: 'skills', icon: <FaCogs />, label: 'Skills' },
  { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
];

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visibleSection, setVisibleSection] = useState<string | null>('overview');

  // Effect to detect which section is currently visible in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Find the section that is currently visible
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setVisibleSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Set active section to trigger blinking effect
      setActiveSection(id);

      // Remove blinking effect after 1 second
      setTimeout(() => setActiveSection(null), 1000);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-zinc-800 text-zinc-300 shadow-md z-50 py-4 font-serif"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-center gap-14">
        {sections.map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex flex-col items-center text-lg font-semibold transition-all duration-300 
                      hover:text-zinc-400 relative group`}
          >
            <div className="flex flex-col items-center">
              {/* Icon with conditional pulsing animation */}
              <div className={activeSection === id ? 'animate-pulse' : ''}>
                {icon}
              </div>
              
              {/* Label */}
              <span>{label}</span>
            </div>
            
            {/* Indicator for currently visible section */}
            {visibleSection === id && (
              <div className="absolute -bottom-2 w-full h-0.5 bg-zinc-400" />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavigationBar;