import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-neutral-900 dark:text-white"
        >
          Saurav Jha
        </Link>

        <div className="flex items-center gap-4 sm:gap-5 text-neutral-600 dark:text-neutral-300">
          <a
            href="https://github.com/jhasaurav97"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-600 dark:hover:text-blue-500 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jha-saurav97"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-600 dark:hover:text-blue-500  transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:jhasaurav593@gmail.com"
            aria-label="Email"
            className="hover:text-blue-600 dark:hover:text-blue-500  transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="#contact"
            className="hidden md:block px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          <button
            className="p-2 rounded-md hover:bg-neutral-200  dark:hover:bg-neutral-800 transition"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
