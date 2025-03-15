import projectsData from '../assets/data/projects.json';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer'; // Import the Footer

// Importing project images
import GBCTRAVELImg from '../assets/Images/GBCTRAVEL.png';
import InventoryImg from '../assets/Images/Inventory.jpeg';
import empImg from '../assets/Images/emp.jpeg';
import shopImg from '../assets/Images/SHOP.png';
import weatherAppImg from '../assets/Images/WETH.jpeg'; // CASE SENSITIVE: check file name
import chatRoomImg from '../assets/Images/CHATAPP.png';     // CASE SENSITIVE: check file name

// Map project names to their corresponding images
const imageMap: Record<string, string> = {
  'ShopSmart': shopImg,
  'GBC Travel Group': GBCTRAVELImg,
  'Employee Management': empImg,
  'Inventory Management Spring Boot Backend Application': InventoryImg,
  'Weather-App-Using-ReactJS': weatherAppImg,
  'Chat-Room': chatRoomImg,
};

const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between bg-sky-900 text-white'>
      {/* Projects Section */}
      <div className='mx-auto w-full max-w-6xl p-8 pt-20'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Projects</h1>
        <div className='flex flex-col gap-6 overflow-y-auto'>
          {projectsData.map((project, index) => (
            <div key={index} className='w-full'>
              <ProjectCard
                project={project}
                image={imageMap[project.name] || shopImg}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
