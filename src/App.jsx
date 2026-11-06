import React, { useEffect, useState } from "react";

const navigation = [
  ["Home", "profile"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Tech Stack", "skills"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const experiences = [
  {
    company: "CGI",
    role: "Associate Software Engineer",
    date: "2025 - Present",
    location: "Professional Experience",
    points: [
      "Worked on software development activities involving application development and maintenance.",
      "Collaborated with team members to understand requirements and implement software solutions.",
      "Worked with development tools and technologies as part of professional software development.",
      "Participated in debugging, testing and improving application functionality.",
    ],
    technologies: [
      "Software Development",
      "Backend Development",
      "Programming",
      "Database",
    ],
  },
  {
    company: "Bharat Intern",
    role: "Full Stack Developer Intern",
    date: "Oct 2023 – Apr 2024",
    location: "Internship · 6 Months",
    points: [
      "Completed a 6-month internship as a Full Stack Developer Intern.",
      "Gained hands-on experience applying theoretical knowledge to practical software development.",
      "Worked on full-stack development concepts involving frontend and backend technologies.",
      "Improved practical programming, problem-solving and application development skills.",
      "Explored industry-oriented development practices through hands-on learning and project work.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL"],
  },
];

const skillCategories = [
  {
    icon: "bx-code-alt",
    title: "Programming",
    description: "Core programming languages",
    skills: [
      [
        "Java",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      ],
      [
        "Python",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      ],
      [
        "C",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      ],
      [
        "C++",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      ],
      ["SQL", "https://cdn.simpleicons.org/mysql"],
    ],
  },
  {
    icon: "bx-laptop",
    title: "Frontend Development",
    description: "User interface and web development",
    skills: [
      [
        "HTML",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      ],
      [
        "CSS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      ],
      [
        "JavaScript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      ],
      [
        "React",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      ],
      [
        "Vite",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      ],
      [
        "Bootstrap",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      ],
      ["Streamlit", "https://cdn.simpleicons.org/streamlit"],
    ],
  },
  {
    icon: "bx-server",
    title: "Backend Development",
    description: "APIs, services and application development",
    skills: [
      [
        "Core Java",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      ],
      [
        "Spring Boot",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      ],
      [
        "Spring Batch",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      ],
      ["Microservices", null, "bx-network-chart"],
      ["Batch Processing", null, "bx-task"],
      ["REST APIs", null, "bx-transfer-alt"],
    ],
  },
  {
    icon: "bx-data",
    title: "Database",
    description: "Data storage and management",
    skills: [
      [
        "Oracle Database",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
      ],
      ["SQL", "https://cdn.simpleicons.org/mysql"],
      [
        "SQLite",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      ],
      ["Database Validation", null, "bx-check-shield"],
    ],
  },
  {
    icon: "bx-brain",
    title: "AI / Generative AI",
    description: "AI-powered application technologies",
    skills: [
      ["Generative AI", null, "bx-bot"],
      ["Prompt Engineering", null, "bx-message-rounded-dots"],
      ["RAG", null, "bx-search-alt"],
      ["LangChain", "https://cdn.simpleicons.org/langchain"],
      ["Hugging Face Transformers", "https://cdn.simpleicons.org/huggingface"],
      ["Sentence Transformers", null, "bx-chip"],
      ["Embeddings", null, "bx-vector"],
      ["Semantic Search", null, "bx-search"],
    ],
  },
  {
    icon: "bx-wrench",
    title: "DevOps & Tools",
    description: "Development and deployment tools",
    skills: [
      ["OpenShift", "https://cdn.simpleicons.org/redhatopenshift"],
      [
        "Git",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      ],
      ["GitHub", "https://cdn.simpleicons.org/github"],
      [
        "Linux",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      ],
      [
        "PowerShell",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
      ],
      ["Windows Task Scheduler", null, "bx-calendar"],
      ["Eclipse", null, "bx-code-alt"],
      ["STS", null, "bx-code-block"],
      [
        "VS Code",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      ],
    ],
  },
  {
    icon: "bx-line-chart",
    title: "Monitoring & Logging",
    description: "Application monitoring and observability",
    skills: [
      ["ELK Stack", "https://cdn.simpleicons.org/elastic"],
      ["Grafana", "https://cdn.simpleicons.org/grafana"],
      ["Logging", null, "bx-file-find"],
    ],
  },
];

const education = [
  {
    years: "2019 – 2023",
    degree: "Bachelor of Engineering",
    subject: "Electronics and Communication Engineering",
    school: "Osmania University",
  },
  {
    years: "2017 – 2019",
    degree: "Board of Intermediate",
    subject: "MPC",
    school: "Resonance Junior College",
  },
  {
    years: "2016 – 2017",
    degree: "Secondary School Certificate",
    school: "Gitanjali Vidhyaniketan School",
  },
];

const projects = [
  {
    name: "Xtra Spicy",
    image: "xtra spicy.png",
    description:
      "Responsive web application developed using frontend web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "https://digajerla-anwesh.github.io/Xtra_Chilli/",
  },
  {
    name: "Online Shopping Application",
    image: "online-shopping.png",
    description:
      "Web-based shopping application designed to provide a simple and responsive user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    name: "SoftTech",
    image: "softtech.jpg",
    description:
      "Responsive website created to demonstrate modern frontend development and user interface design.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/",
    demo: "https://anweshdigajerla-softech.netlify.app",
  },
];

function SiteNav({ mobile = false, menuOpen = false, onToggle, onNavigate }) {
  return (
    <nav
      id={mobile ? "hamburger-nav" : "desktop-nav"}
      aria-label={mobile ? "Mobile navigation" : "Main navigation"}
    >
      <a
        className="nav-logo"
        href="#profile"
        onClick={onNavigate}
        aria-label="Anwesh Digajerla home"
      >
        <img className="ad-logo" src="/photos/ad-removebg-preview.png" alt="" />
        <span className="logo">Anwesh Digajerla</span>
      </a>
      {mobile ? (
        <div className="hamburger-menu">
          <button
            className={`hamburger-icon${menuOpen ? " open" : ""}`}
            type="button"
            onClick={onToggle}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`menu-links${menuOpen ? " open" : ""}`}>
            {navigation.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={onNavigate}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="nav-links">
          {navigation.map(([label, id], index) => (
            <li key={id}>
              <a href={`#${id}`} style={{ "--navAni": index + 1 }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <>
      <p className="section__text__p1">{eyebrow}</p>
      <h2 className="title">{title}</h2>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => setShowTop(window.scrollY > 500);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <SiteNav />
      <SiteNav
        mobile
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />

      <main>
        <section id="profile">
          <div className="section__pic-container">
            <img src="/photos/developer.avif" alt="Anwesh Digajerla profile" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">
              <span className="anwesh">Anwesh Digajerla</span>
            </h1>
            <p className="section__text__p2">Software Engineer</p>
            <p className="section__text__p3">
              Full Stack Developer | Software Engineer | GenAI Enthusiast
            </p>
            <p className="profile-description">
              I build responsive web applications, backend services and
              practical software solutions using modern technologies. I am
              interested in full-stack development, scalable backend systems and
              Generative AI applications.
            </p>
            <div className="btn-container">
              <a
                className="btn btn-color-2"
                href="/photos/ANWESH_DIGAJERLA.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <a className="btn btn-color-1" href="#contact">
                Contact Me
              </a>
            </div>
            <div id="socials-container">
              <a
                href="https://www.linkedin.com/in/digajerla-anwesh"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="/photos/linkedin-icon_488108-5-removebg-preview.png"
                  alt="LinkedIn"
                  className="icon linkedin"
                />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="/photos/github_PNG20.png"
                  alt="GitHub"
                  className="icon git"
                />
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
              >
                <img
                  src="/photos/hackerrank.png"
                  alt="HackerRank"
                  className="icon hackerrank"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <SectionHeading eyebrow="Get To Know More" title="About Me" />
          <div className="about-section">
            <article className="about-card">
              <i className="bx bx-code-alt" aria-hidden="true" />
              <h2>Software Engineer</h2>
              <p>
                Engineering graduate with experience in software development,
                backend development, database technologies and full-stack
                application development.
              </p>
            </article>
            <article className="about-card">
              <i className="bx bx-laptop" aria-hidden="true" />
              <h2>Full Stack Development</h2>
              <p>
                Experienced with frontend technologies such as HTML, CSS, React,
                Vite and Bootstrap, along with backend development, REST APIs,
                databases and microservices.
              </p>
            </article>
            <article className="about-card">
              <i className="bx bx-brain" aria-hidden="true" />
              <h2>Generative AI</h2>
              <p>
                Exploring Generative AI technologies including Prompt
                Engineering, RAG, LangChain, embeddings, semantic search and
                transformer-based models.
              </p>
            </article>
          </div>
        </section>

        <section id="experience">
          <SectionHeading
            eyebrow="My Professional Journey"
            title="Professional Experience"
          />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-dot" />
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h2 className="company-name">{experience.company}</h2>
                      <h3>{experience.role}</h3>
                    </div>
                    <span>{experience.date}</span>
                  </div>
                  <p className="experience-location">{experience.location}</p>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="experience-tech">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeading eyebrow="Explore My" title="Tech Stack" />
          <div className="skills-container">
            {skillCategories.map((category) => (
              <article className="skill-category" key={category.title}>
                <div className="category-header">
                  <div className="category-icon">
                    <i className={`bx ${category.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>
                </div>
                <div className="skill-list">
                  {category.skills.map(([name, image, icon]) => (
                    <div className="skill-item" key={name}>
                      {image ? (
                        <img src={image} alt="" loading="lazy" />
                      ) : (
                        <i
                          className={`bx ${icon} skill-icon`}
                          aria-hidden="true"
                        />
                      )}
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <SectionHeading eyebrow="My Academic Background" title="Education" />
          <div className="education-container">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-year">{item.years}</div>
                <div className="education-line">
                  <span />
                </div>
                <div className="education-content">
                  <h2>{item.degree}</h2>
                  {item.subject && <h3>{item.subject}</h3>}
                  <p>{item.school}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionHeading eyebrow="Browse My Recent" title="Projects" />
          <div className="projects-container">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-image">
                  <img
                    src={`/photos/${project.image}`}
                    alt={`${project.name} project`}
                    loading="lazy"
                  />
                </div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="btn-container">
                  <a
                    className="btn btn-color-2 project-btn"
                    href={project.github}
                    target={project.github === "#" ? undefined : "_blank"}
                    rel={project.github === "#" ? undefined : "noreferrer"}
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-color-2 project-btn"
                    href={project.demo}
                    target={project.demo === "#" ? undefined : "_blank"}
                    rel={project.demo === "#" ? undefined : "noreferrer"}
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionHeading eyebrow="Get In Touch" title="Contact Me" />
          <div className="contact-info-upper-container">
            <ContactCard
              image="mail.jpg"
              label="Gmail"
              href="mailto:anweshdigajerla@gmail.com"
            />
            <ContactCard
              image="linkedin-icon_488108-5-removebg-preview.png"
              label="LinkedIn"
              href="https://www.linkedin.com/in/digajerla-anwesh"
            />
            <ContactCard
              image="github_PNG20.png"
              label="GitHub"
              href="https://github.com/"
            />
          </div>
        </section>
      </main>

      <footer>
        <nav aria-label="Footer navigation">
          <div className="nav-links-container">
            <ul className="nav-links">
              {navigation.map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <p>© 2026 Anwesh Digajerla. All Rights Reserved.</p>
      </footer>

      {showTop && (
        <button
          className="arrow"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <img src="/photos/arrow.png" alt="" className="arrowicon" />
        </button>
      )}
    </>
  );
}

function ContactCard({ image, label, href }) {
  return (
    <div className="contact-info-container">
      <img src={`/photos/${image}`} alt="" className="icon contact-icon" />
      <p>
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        >
          {label}
        </a>
      </p>
    </div>
  );
}

export default App;
