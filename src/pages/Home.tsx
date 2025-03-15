import NavigationBar from '../components/NavigationBar';
import Experience from '../components/EducationExperience';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

// Import project data and images
import projectsData from '../assets/data/projects.json';
// Importing project images
import GBCTRAVELImg from '../assets/Images/GBCTRAVEL.png';
import InventoryImg from '../assets/Images/Inventory.jpeg';
import empImg from '../assets/Images/emp.jpeg';
import shopImg from '../assets/Images/SHOP.png';
import weatherAppImg from '../assets/Images/WETH.jpeg'; // CASE SENSITIVE: check file name
import chatRoomImg from '../assets/Images/CHATAPP.png';     // CASE SENSITIVE: check file name

// Image map
const imageMap: { [key: string]: string } = {
  'ShopSmart': shopImg,
  'GBC Travel Group': GBCTRAVELImg,
  'Employee Management': empImg,
  'Inventory Management Spring Boot Backend Application': InventoryImg,
  'Weather-App-Using-ReactJS': weatherAppImg,
  'Chat-Room': chatRoomImg,
};

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Top Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="mt-16 p-6"> {/* Added margin-top to avoid overlap with navbar */}

        {/* Profile Section */}
        <section id="overview" className="max-w-6xl mx-auto py-10">
          <Profile />
        </section>

        {/* Education & Experience Section */}
        <section id="education-experience" className="max-w-6xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Education & Experience</h1>
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto py-10">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
          <div className="flex flex-col gap-6 overflow-y-auto">
            {projectsData.map((project, index) => (
              <div key={index} className="w-full">
                <ProjectCard
                  project={project}
                  image={imageMap[project.name] || shopImg}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
