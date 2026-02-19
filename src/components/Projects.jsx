import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "InsightForge",
    description:
      "AI-powered research platform that turns user queries into structured insights and summaries. Designed with scalable backend architecture and secure authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "FastAPI", "Docker"],
    image: "/projects/InsightForge-App.png",
    live: "https://insightforge-nine.vercel.app",
    github: "https://github.com/jhasaurav97/insightforge",
    featured: true,
  },
  {
    title: "Note Keeper App",
    description:
      "Secure personal notes and task manager that helps users organize daily work and routines with JWT-based authentication and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
    image: "/projects/Note Keeper App.png",
    live: "https://note-keeper-app-phi.vercel.app",
    github: "https://github.com/jhasaurav97/Note-Keeper-App",
  },
  {
    title: "HRMS Lite",
    description:
      "Lightweight HR management system for tracking employee attendance, managing workforce records, and handling API-based backend operations.",
    tech: ["React", "Tailwind", "FastAPI", "MongoDB", "REST"],
    image: "/projects/HRMS-Lite.png",
    live: "https://hrms-lite-eight-psi.vercel.app",
    github: "https://github.com/jhasaurav97/hrms-lite",
  },

  {
    title: "MeShop (Shopping Cart)",
    description:
      "E-commerce shopping cart system with login, signup, product listing, and cart management.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "/projects/Shopping-Cart.png",
    live: "https://stalwart-cascaron-e77564.netlify.app/",
    github: "https://github.com/jhasaurav97/Shopping-Cart",
  },

  {
    title: "Best Buy Deals (JIA LLC)",
    description:
      "Commercial e-commerce website with dynamic product listings, banners, and responsive layout.",
    tech: ["React", "Tailwind", "E-Commerce UI", "Responsive Design"],
    image: "/projects/ecommerce-app.png",
    live: "https://relaxed-palmier-76fd9c.netlify.app/",
    github: "https://github.com/jhasaurav97/bestbuydealsjiallc",
  },

  {
    title: "Travel Pack Planner",
    description:
      "Interactive travel packing list application for organizing trip items with sorting features.",
    tech: ["JavaScript", "DOM", "UI Design", "Local Storage"],
    image: "/projects/Travel-Packr.png",
    live: "https://beautiful-pudding-2b0bf1.netlify.app/",
    github: "https://github.com/jhasaurav97",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Selected Projects
          </h2>

          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
            Real-world apps with live demos
          </p>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A curated collection of production-ready applications built for
            business systems, AI tools, and productivity platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative
              bg-white dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              rounded-2xl overflow-hidden
              shadow-sm hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span
                  className="absolute top-4 right-4 z-30
                bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow"
                >
                  Featured
                </span>
              )}

              {/* Image Section */}
              <div className="relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-center
                  group-hover:scale-110
                  transition-transform duration-700"
                />

                {/* Hover Buttons */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md
                    hover:bg-blue-700 transition flex items-center gap-2 shadow"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-md
                    hover:bg-neutral-800 transition flex items-center gap-2 shadow"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-xs uppercase tracking-wider text-blue-500 font-medium">
                  Case Study
                </p>

                {/* Description */}
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2 min-h-14">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full
                      backdrop-blur-md
                      bg-neutral-200/60 dark:bg-neutral-800/60
                      text-neutral-800 dark:text-neutral-200
                      border border-neutral-300/40 dark:border-neutral-700/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="mt-6 flex gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm
                    text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm
                    text-neutral-700 dark:text-neutral-300 hover:underline"
                  >
                    <FaGithub size={14} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
