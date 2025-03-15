import { FaCodeBranch, FaFile, FaFileSignature } from 'react-icons/fa6';

const ResumeButton = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {/* GitHub Button */}
      <a
        href="https://github.com/devgandhi100"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-950"
      >
        <FaCodeBranch className="text-lg" />
        GitHub
      </a>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/19o_gzvzYpV3obTmGPZ_Barz8YVoJm6BD/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-950"
      >
        <FaFile className="text-lg" />
        Resume
      </a>

      {/* Cover Letter Button */}
      <a
        href="https://drive.google.com/file/d/1IR80jQFEw3WKN4f-D7OMjvT5AwQMIEbi/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-800 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-950"
      >
        <FaFileSignature className="text-lg" />
        Cover Letter
      </a>
    </div>
  );
};

export default ResumeButton;
