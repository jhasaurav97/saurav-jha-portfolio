import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Business Websites",
    desc: "High-converting websites for startups and small businesses.",
    features: [
      "Responsive Design",
      "SEO Ready",
      "Fast Loading",
      "Contact Forms",
    ],
    priceInr: "₹4,000 – ₹6,000",
    priceUsd: "$75 – $120",
  },
  {
    icon: FaServer,
    title: "Web Applications",
    desc: "Custom full-stack solutions to automate and grow your business.",
    features: ["Authentication", "Dashboards", "REST APIs", "Admin Panel"],
    priceInr: "₹8,000+",
    priceUsd: "$150+",
  },
  {
    icon: FaTools,
    title: "Bug Fixing & Optimization",
    desc: "Fix errors, improve speed, and clean up your codebase.",
    features: [
      "React/Node Fixes",
      "Performance Boost",
      "Code Refactor",
      "Security Checks",
    ],
    priceInr: "₹1,000+",
    priceUsd: "$20+",
  },
];


const Services = () => {
  return (
    <section
      id="services"
      className="border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Services
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Professional development services focused on performance, security,
            and long-term reliability.
          </p>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.title}
                className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:bg-linear-to-br hover:from-blue-600 hover:to-cyan-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 group-hover:bg-white/20 group-hover:text-white transition">
                  <Icon size={22} />
                </div>
                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-white transition">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover:text-white/90 transition">
                  {service.desc}
                </p>
                {/* Price */}
                <div className="mt-6">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-500 group-hover:text-white transition">
                    Starting at {service.priceInr}
                  </p>
                  <p className="text-md text-neutral-500 dark:text-neutral-400 group-hover:text-white/80 transition">
                    ({service.priceUsd})
                  </p>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition" />
              </div>
            );
         })} 
        </div>
      </div>
    </section>
  );
};

export default Services;
