import { lazy, Suspense, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const SystemScene = lazy(() => import("./components/SystemScene.jsx"));

const navItems = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

const projects = [
  {
    number: "01",
    title: "Tender Management Platform",
    category: "Enterprise product · Professional work",
    description:
      "Worked on the pre-award module of an enterprise tender and construction project-tracking platform. The workflow covered 31 steps across four phases, supported by a multi-source data pipeline.",
    highlights: ["31-step workflow", "19,000+ tender records", "Scheduled data collection"],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Playwright", "Docker"],
    visual: "tender",
    featured: true,
    note: "Aniston Technologies",
  },
  {
    number: "02",
    title: "MindLedger",
    category: "AI product · Personal project",
    description:
      "A multi-tenant AI journaling platform with evidence-grounded retrieval. Users can ask questions about their entries and receive answers linked to the source notes, or a clear indication when the evidence is insufficient.",
    highlights: ["Evidence-grounded answers", "Personal Memory Graph", "Tenant isolation"],
    stack: ["React", "TypeScript", "Node.js", "Firebase", "Gemini API", "Cloud Run"],
    visual: "mind",
    live: "https://mindledger.ai.studio",
    github: "https://github.com/jhasaurav97/mindledger",
  },
  {
    number: "03",
    title: "Atlas AI Financial Assistant",
    category: "AI product · Personal project",
    description:
      "A Telegram financial assistant that combines market data, financial news and SEC EDGAR filings with persistent PostgreSQL memory, intent routing and proactive price alerts.",
    highlights: ["Context-aware responses", "Persistent user memory", "Proactive alerts"],
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Gemini API", "Docker"],
    visual: "atlas",
    live: "https://t.me/atlas_financialagent_bot",
    github: "https://github.com/jhasaurav97/atlas-ai-financial-assistant",
  },
  {
    number: "04",
    title: "FotoOwl Headless Media SDK",
    category: "Developer tooling · Personal project",
    description:
      "A framework-agnostic media component library with a React wrapper and a custom Vite + TypeScript build pipeline. Includes Infinite Grid, Lightbox and Video Reel Swiper components.",
    highlights: ["Headless UI patterns", "Reusable React hooks", "Monorepo workflow"],
    stack: ["React", "TypeScript", "Vite", "npm Workspaces"],
    visual: "foto",
    github: "https://github.com/jhasaurav97/fotoowl-headless-media-sdk",
  },
];

const experiences = [
  {
    period: "May 2026 — Jun 2026",
    role: "Full Stack Developer Intern",
    company: "Aniston Technologies LLP",
    place: "Delhi",
    points: [
      "Worked on a pre-award module for an enterprise tender management and construction project-tracking platform, covering a 31-step workflow across four phases.",
      "Built a Playwright-based multi-source scraping pipeline for 19,000+ government tender records from tender.gov.in, CPWD and Delhi government portals, with source-specific fallback handling and scheduled crawls.",
      "Developed backend features using Node.js, TypeScript, PostgreSQL, Redis and BullMQ, and containerized services with Docker.",
    ],
  },
  {
    period: "Sep 2025 — Oct 2025",
    role: "Full Stack Developer · Contract",
    company: "Espion Infotech Pvt. Ltd.",
    place: "Remote",
    points: [
      "Built and maintained React.js UI components integrated with REST APIs for client-facing applications.",
      "Resolved UI defects, improved responsive behaviour and supported production deployments.",
    ],
  },
  {
    period: "Jan 2025 — Jul 2025",
    role: "Junior Full Stack Developer",
    company: "Coregenic Softwares",
    place: "Noida",
    points: [
      "Integrated Stripe into a production MERN e-commerce platform, including backend payment flows, order validation and API integration.",
      "Developed REST APIs for product, order and payment modules using Node.js and Express.js.",
      "Improved frontend performance by approximately 30% through lazy loading and code splitting.",
    ],
  },
  {
    period: "Aug 2024 — Sep 2024",
    role: "Full Stack Developer Intern",
    company: "Zidio Development Company",
    place: "Remote",
    points: [
      "Built a MERN-based job portal with JWT authentication, role-based access control, REST APIs and responsive Tailwind CSS interfaces.",
    ],
  },
  {
    period: "Jul 2024 — Aug 2024",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    place: "Remote",
    points: [
      "Built responsive web applications using HTML, CSS, JavaScript and REST API integration. Recognized as a Star Performer.",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    role: "Delivery Project Executive",
    company: "ASL Infosystems Pvt. Ltd.",
    place: "Delhi",
    points: [
      "Coordinated with technical teams on project delivery and supported project requirements and timelines.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "JWT", "OAuth 2.0", "Webhooks"],
  },
  {
    title: "Data & processing",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Firebase", "Firestore", "Redis", "BullMQ"],
  },
  {
    title: "Engineering & cloud",
    icon: Workflow,
    items: ["Docker", "Playwright", "Git", "GitHub", "Postman", "Vercel", "Render", "Google Cloud Run"],
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span className="kicker-line" />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="visual-grid" />
      {type === "tender" && (
        <div className="tender-ui">
          <div className="mini-sidebar"><i /><i /><i /><i /></div>
          <div className="mini-content">
            <div className="mini-topline"><b>Pre-award workspace</b><span>● Live</span></div>
            <div className="mini-stat-row"><i /><i /><i /></div>
            <div className="mini-table"><b /><b /><b /><b /><b /><b /></div>
            <div className="mini-progress"><span /></div>
          </div>
        </div>
      )}
      {type === "mind" && (
        <div className="mind-visual">
          <div className="mind-orbit mind-orbit-one" />
          <div className="mind-orbit mind-orbit-two" />
          <div className="mind-core"><Sparkles size={30} /></div>
          <div className="mind-node mind-node-one" />
          <div className="mind-node mind-node-two" />
          <div className="mind-node mind-node-three" />
          <span className="mind-label mind-label-one">MEMORY</span>
          <span className="mind-label mind-label-two">RETRIEVAL</span>
        </div>
      )}
      {type === "atlas" && (
        <div className="atlas-visual">
          <div className="atlas-head"><span>ATLAS / MARKET BRIEF</span><i /></div>
          <div className="atlas-price"><small>PORTFOLIO SIGNAL</small><strong>+3.42%</strong><span>Market movement</span></div>
          <div className="atlas-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="atlas-feed"><b /><b /><b /></div>
        </div>
      )}
      {type === "foto" && (
        <div className="foto-visual">
          <div className="foto-window">
            <div className="foto-toolbar"><i /><i /><i /><span>FotoOwl / Media Grid</span></div>
            <div className="foto-mosaic">
              <i /><i /><i /><i /><i /><i />
            </div>
          </div>
          <div className="foto-float-tag">HEADLESS UI</div>
        </div>
      )}
      <span className="visual-index">0{type === "tender" ? "1" : type === "mind" ? "2" : type === "atlas" ? "3" : "4"}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.article className="project-card" whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
        <ProjectVisual type={project.visual} />
        <div className="project-card-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <span className="project-number">{project.number}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {project.highlights && (
            <div className="project-highlights">
              {project.highlights.map((item) => <span key={item}><CheckCircle2 size={13} />{item}</span>)}
            </div>
          )}
          <div className="project-tags">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-links">
            {project.note && <span className="project-note">{project.note}</span>}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live product <ExternalLink size={14} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                Source code <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Saurav Jha home">
          <span className="brand-mark">SJ<span>.</span></span>
          <span className="brand-name">SAURAV JHA</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href="mailto:jhasaurav593@gmail.com?subject=Let's%20connect">
          Let’s talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={15} /></a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero-section section-wrap">
          <div className="hero-copy">
            <Reveal>
              <div className="availability-pill">
                <span className="availability-dot" />
                OPEN TO FULL-TIME OPPORTUNITIES
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="hero-eyebrow">FULL STACK DEVELOPER <span>·</span> BACKEND-LEANING</p>
              <h1>
                I build software<br />
                that works <em>beyond</em><br />
                the happy path<span className="hero-period">.</span>
              </h1>
              <p className="hero-description">
                I’m Saurav, a developer working across React, TypeScript and Node.js.
                I build web products, backend services and AI-enabled applications with
                a focus on clear logic and dependable experiences.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button-quiet" href="mailto:jhasaurav593@gmail.com">Get in touch <ArrowRight size={16} /></a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="hero-socials">
                <a href="https://github.com/jhasaurav97" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <span />
                <a href="https://www.linkedin.com/in/jha-saurav97/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <span />
                <a href="mailto:jhasaurav593@gmail.com"><Mail size={16} /> Email</a>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-art" delay={0.14}>
            <div className="scene-shell">
              <div className="scene-topline"><span>ENGINEERING / IN MOTION</span><span>01 — 04</span></div>
              <div className="scene-canvas">
                <Suspense fallback={<div className="scene-fallback"><div className="fallback-orb" /></div>}>
                  {!reduceMotion && <SystemScene />}
                  {reduceMotion && <div className="scene-fallback"><div className="fallback-orb" /></div>}
                </Suspense>
              </div>
              <div className="scene-caption">
                <div><span className="caption-label">CURRENT FOCUS</span><strong>Systems · APIs · AI</strong></div>
                <div className="scene-caption-code">const build = () =&gt; “reliable”;</div>
              </div>
            </div>
            <div className="floating-chip floating-chip-top"><span className="chip-pulse" /> TypeScript / Node.js</div>
            <div className="floating-chip floating-chip-bottom"><Network size={14} /> Thoughtful systems, useful products</div>
          </Reveal>

          <div className="hero-index"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></div>
        </section>

        <section className="quick-stats section-wrap" aria-label="Selected experience highlights">
          <div className="stat-cell"><strong>19k<span>+</span></strong><span>tender records processed</span></div>
          <div className="stat-cell"><strong>31</strong><span>steps across an enterprise workflow</span></div>
          <div className="stat-cell"><strong>~30<span>%</span></strong><span>frontend performance improvement</span></div>
          <div className="stat-cell"><strong>4<span>+</span></strong><span>years building and learning through code since 2024</span></div>
        </section>

        <section id="about" className="section-wrap content-section">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="A LITTLE ABOUT ME"
              title={<>Engineering with <span>clarity</span>.</>}
              description="I like understanding how the pieces fit together, not just getting a screen to render."
            />
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="about-lead">
                My work sits between product development and backend engineering.
                I enjoy turning a requirement into a working feature, connecting the
                UI to dependable APIs, and making sure the underlying data flow makes sense.
              </p>
              <p>
                I’ve worked on e-commerce, enterprise workflow tools, data collection
                pipelines, developer components and AI-powered products. Across those
                projects, I’ve spent time on authentication, database design, API
                integration, background processing, performance and deployment.
              </p>
              <p>
                I’m comfortable learning unfamiliar tools, asking why a solution works,
                and debugging it when it doesn’t. AI coding agents are part of my workflow,
                but architecture decisions, implementation checks and the final behaviour
                still need engineering judgement.
              </p>
            </Reveal>
            <Reveal className="principles-panel" delay={0.1}>
              <div className="principles-title"><span>HOW I THINK</span><Sparkles size={16} /></div>
              <div className="principle-item">
                <span>01</span><div><strong>Start with the problem</strong><p>Understand the workflow and constraints before choosing the implementation.</p></div>
              </div>
              <div className="principle-item">
                <span>02</span><div><strong>Keep the fundamentals clear</strong><p>Readable code, useful abstractions, secure data access and predictable APIs.</p></div>
              </div>
              <div className="principle-item">
                <span>03</span><div><strong>Verify the result</strong><p>Review changes, test important paths and pay attention to failure cases.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="work" className="section-wrap content-section work-section">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="SELECTED WORK"
              title={<>Things I’ve <span>built</span>.</>}
              description="A mix of professional product work and projects where I explored an idea end-to-end."
            />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
          </div>
        </section>

        <section id="experience" className="section-wrap content-section">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="WHERE I’VE WORKED"
              title={<>Experience in <span>practice</span>.</>}
              description="Professional roles, internships and project delivery experience, with the dates shown as they appear on my resume."
            />
          </Reveal>
          <div className="experience-layout">
            <div className="experience-intro">
              <div className="experience-intro-card">
                <BriefcaseBusiness size={20} />
                <strong>From interface details to backend workflows</strong>
                <p>My experience has included shipping UI components, building APIs, processing external data and integrating payment and AI services.</p>
              </div>
              <div className="education-card">
                <GraduationCap size={19} />
                <div><span>EDUCATION</span><strong>B.Tech · Electronics & Communication Engineering</strong><p>Chandigarh Engineering College, Mohali · 2019–2023</p></div>
              </div>
            </div>
            <div className="timeline">
              {experiences.map((item, index) => (
                <Reveal key={item.company} delay={index * 0.035}>
                  <article className="timeline-item">
                    <div className="timeline-marker"><span /></div>
                    <div className="timeline-content">
                      <div className="timeline-top"><span>{item.period}</span><span>{item.place}</span></div>
                      <h3>{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                      <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-wrap content-section stack-section">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="TOOLS I WORK WITH"
              title={<>A practical <span>toolkit</span>.</>}
              description="Technologies I’ve used in work and projects. My strongest day-to-day areas are JavaScript/TypeScript, Node.js, React and API development."
            />
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 0.06}>
                  <div className="skill-card">
                    <div className="skill-card-heading"><span className="skill-icon"><Icon size={18} /></span><h3>{group.title}</h3></div>
                    <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="ai-workflow-panel">
              <div className="ai-workflow-icon"><Sparkles size={21} /></div>
              <div className="ai-workflow-copy">
                <span className="small-label">AI-ASSISTED DEVELOPMENT</span>
                <h3>Use the tools. Own the engineering.</h3>
                <p>
                  I use Claude Code, OpenAI Codex and GitHub Copilot to help implement,
                  refactor and debug code. I also experiment with local models through
                  Ollama, use Gemini APIs inside applications, and build workflow
                  automations with n8n. I use ChatGPT mainly for architecture discussions
                  and working through technical decisions.
                </p>
                <div className="ai-tool-tags"><span>Claude Code</span><span>OpenAI Codex</span><span>GitHub Copilot</span><span>Ollama</span><span>Gemini API</span><span>n8n</span></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section-wrap content-section education-section">
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="LEARNING & CREDENTIALS"
              title={<>Always <span>learning</span>.</>}
              description="A few of the structured learning experiences that have supported my development journey."
            />
          </Reveal>
          <div className="credentials-grid">
            <div className="credential-item"><span>2026</span><div><strong>Google Cloud Gen AI Academy · APAC Edition, Cohort 3</strong><p>Certificate of Completion</p></div></div>
            <div className="credential-item"><span>2023</span><div><strong>J.P. Morgan Software Engineering Virtual Experience</strong><p>Forage</p></div></div>
            <div className="credential-item"><span>2024</span><div><strong>Front-end Web Development Training</strong><p>Internshala · 92%</p></div></div>
            <div className="credential-item"><span>2023</span><div><strong>Full Stack Web Development With AI Training</strong><p>Internshala</p></div></div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <Reveal>
            <div className="contact-panel">
              <div className="contact-glow" />
              <div className="contact-kicker"><span className="availability-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
              <h2>Have a problem<br />worth <em>solving?</em></h2>
              <p>
                I’m looking for a full-time opportunity where I can contribute to
                product development, strengthen my backend engineering skills and
                learn from a thoughtful team.
              </p>
              <div className="contact-actions">
                <a className="button-primary" href="mailto:jhasaurav593@gmail.com?subject=Let's%20talk%20about%20an%20opportunity">Start a conversation <ArrowUpRight size={17} /></a>
                <a className="contact-link" href="https://github.com/jhasaurav97" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a className="contact-link" href="https://www.linkedin.com/in/jha-saurav97/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              </div>
              <div className="contact-bottom"><span>Delhi, India · Open to remote and relocation</span><span>jhasaurav593@gmail.com</span></div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top"><span className="brand-mark">SJ<span>.</span></span><span className="brand-name">SAURAV JHA</span></a>
        <span>Built with React, TypeScript thinking and a little motion.</span>
        <a href="#top" className="back-to-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} Saurav Jha</span>
      </footer>
    </div>
  );
}

export default App;
