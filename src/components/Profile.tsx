import headshot from '../assets/Images/dev_photo.jpeg';
import ResumeButton from './ResumeButton';

const Profile = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg bg-zinc-800 p-8 shadow-lg font-serif">
      
      {/* Profile Image */}
      <div className="relative mb-6">
        <img
          src={headshot}
          alt="Dev Gandhi's profile photo"
          className="h-[220px] w-[220px] rounded-lg border-2 border-zinc-600 object-cover shadow-lg md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px] transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 rounded-lg border-2 border-zinc-500 opacity-20"></div>
      </div>

      {/* Name */}
      <h1 className="mb-3 text-2xl font-bold text-zinc-300 md:text-3xl lg:text-4xl">
        Dev Gandhi
      </h1>

      {/* Professional Description */}
      <p className="mb-6 max-w-2xl text-center text-lg text-zinc-400 leading-relaxed">
        Dynamic software developer with an <strong>Advanced Diploma in Computer Programming and Analysis</strong> from 
        George Brown College (expected 2025). Currently contributing to scalable web applications at <strong>Shopsmart </strong> 

          using <strong>React</strong> and <strong>Node.js</strong>, with experience in Firebase Authentication and Stripe Payment integration. 
        Passionate about building robust solutions demonstrated through full-stack <strong>MERN projects</strong>, including a 
        <strong> Weather App</strong> and <strong>Employee Management System</strong>. Proficient in multiple programming 
        languages and frameworks with a strong foundation in <strong>Agile methodologies</strong> and <strong>DevOps practices</strong>.
      </p>

      {/* Resume & GitHub Buttons */}
      <ResumeButton />
    </div>
  );
};

export default Profile;
