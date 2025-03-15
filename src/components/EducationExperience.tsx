import { MdSchool, MdWork } from 'react-icons/md'; // Different icons
import { FaChevronRight } from 'react-icons/fa'; // Bullet point icon
import education from '../assets/data/education.json';
import experience from '../assets/data/experience.json';

const EducationExperience = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-zinc-800 p-8 shadow-lg font-serif">
      {/* Education Section */}
      <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-zinc-300">
        <MdSchool className="text-zinc-400 text-4xl" /> Education
      </h2>
      <div className="scrollable flex flex-1 flex-col space-y-4 overflow-y-auto text-zinc-300 p-6 bg-zinc-700 shadow-md">
        <p className="text-2xl font-semibold">{education.institution} - {education.program}</p>
        <p className="text-lg">
          <strong>Course Years:</strong> {education.CourseYear} 
          <br />
           <strong>G.P.A:</strong> {education.gpa}
        </p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-zinc-600" />

      {/* Experience Section */}
      <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-zinc-300">
        <MdWork className="text-zinc-400 text-4xl" /> Experience
      </h2>
      <div className="scrollable flex flex-1 flex-col space-y-6 overflow-y-auto">
        {experience.map((job, index) => (
          <div key={index} className="w-full bg-zinc-700 p-6 shadow-md hover:bg-zinc-600 transition duration-300">
            <h3 className="text-2xl font-semibold text-zinc-200">{job.role} - {job.company}</h3>
            <p className="mt-1 text-lg text-zinc-400">{job.period}</p>
            <ul className="mt-3 space-y-2 pl-4">
              {job.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-zinc-300">
                  <FaChevronRight className="text-zinc-400" /> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationExperience;
