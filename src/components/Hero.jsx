const Hero = () => {
  return (
    <section className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
            I Build Fast, Secure <span className="text-blue-500">Web Apps</span>{" "}
            <br />
            That Help Businesses Grow
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl font-medium">
            MERN Developer with experience in AI tools, productivity apps, and
            business systems.
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl">
            I design and develop scalable, high-performance web applications for
            startups and small businesses.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
            >
              See My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 rounded-md font-medium transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex justify-center items-center">
          <img
            src="/profile-pic.png"
            alt="Saurav Jha"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-700 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
