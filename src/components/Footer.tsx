import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-400 py-8 mt-16 shadow-lg font-serif border-t border-zinc-700">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
        <span className="font-semibold hover:text-zinc-300 transition duration-300">
          Dev Gandhi
        </span>
        <div className="flex items-center space-x-2">
          <FaRegCopyright className="text-base" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
