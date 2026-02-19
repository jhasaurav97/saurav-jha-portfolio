import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left branding */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Saurav Jha
            </h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Full Stack Developer · MERN · Production-Ready Apps
            </p>
          </div>
          {/* Center : Links */}
          <div className="flex gap-6 text-neutral-600 dark:text-neutral-400">
            <a
              href="https://github.com/jhasaurav97"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jha-saurav97"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:jhasaurav593@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
        {/* Bottom Line */}
        <div className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Saurav Jha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
