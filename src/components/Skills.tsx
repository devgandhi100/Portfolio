import { 
  FaJs, FaPython, FaJava, FaPhp, FaDatabase, FaHtml5, FaCss3, 
  FaReact, FaNodeJs, 
} from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';

import { 
  SiTypescript, SiNextdotjs, SiExpress, SiSpringboot, SiDotnet,  
  SiFirebase, SiMongodb, SiMysql, SiPostgresql, SiOracle, SiApachekafka
} from 'react-icons/si';

const languages = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
];

const frameworks = [
  { name: "ASP.NET Core", icon: <SiDotnet /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: ".NET", icon: <SiDotnet /> },
];

const databases = [
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "OracleSQL", icon: <SiOracle /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Kafka", icon: <SiApachekafka /> },
];

const Skills = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-zinc-800 p-10 shadow-xl font-serif">
      {/* Title */}
      <h2 className="mb-8 flex items-center gap-4 text-4xl font-bold text-zinc-300">
        <FaTools className="text-zinc-400 text-5xl" /> Skills
      </h2>

      {/* Programming Languages Section */}
      <h3 className="text-2xl font-semibold text-zinc-400 mt-6 mb-3">Programming Languages</h3>
      <div className="scrollable flex flex-wrap gap-5">
        {languages.map((skill, index) => (
          <span key={index} className="flex items-center gap-3 bg-zinc-700 px-5 py-3 text-lg font-medium text-zinc-300 shadow-md hover:bg-zinc-600 transition duration-300">
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>

      {/* Frameworks & Libraries Section */}
      <h3 className="text-2xl font-semibold text-zinc-400 mt-8 mb-3">Frameworks & Libraries</h3>
      <div className="scrollable flex flex-wrap gap-5">
        {frameworks.map((skill, index) => (
          <span key={index} className="flex items-center gap-3 bg-zinc-700 px-5 py-3 text-lg font-medium text-zinc-300 shadow-md hover:bg-zinc-600 transition duration-300">
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>

      {/* Databases & Cloud Services Section */}
      <h3 className="text-2xl font-semibold text-zinc-400 mt-8 mb-3">Databases & Cloud Services</h3>
      <div className="scrollable flex flex-wrap gap-5">
        {databases.map((skill, index) => (
          <span key={index} className="flex items-center gap-3 bg-zinc-700 px-5 py-3 text-lg font-medium text-zinc-300 shadow-md hover:bg-zinc-600 transition duration-300">
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
