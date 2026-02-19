import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-28 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
          Let’s Build Something Great Together
        </h2>

        <p className="mt-5 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Have a project idea or need help improving your current system? I’m
          available for freelance projects and collaborations.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {/* WhatsApp - Primary CTA */}
          <a
            href="https://wa.me/918700191330"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-7 py-4
            bg-gradient-to-r from-green-500 to-green-600
            hover:from-green-600 hover:to-green-700
            text-white rounded-xl font-semibold
            shadow-lg hover:shadow-xl
            transition-all duration-300"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:jhasaurav593@gmail.com"
            className="flex items-center gap-3 px-7 py-4
            bg-white dark:bg-neutral-900
            border border-neutral-300 dark:border-neutral-700
            hover:border-blue-500
            text-neutral-900 dark:text-white
            rounded-xl font-semibold
            transition"
          >
            <FaEnvelope size={16} />
            Send Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/jha-saurav97"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-7 py-4
            bg-white dark:bg-neutral-900
            border border-neutral-300 dark:border-neutral-700
            hover:border-blue-500
            text-neutral-900 dark:text-white
            rounded-xl font-semibold
            transition"
          >
            <FaLinkedin size={16} />
            Connect on LinkedIn
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
          Usually responds within a few hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
