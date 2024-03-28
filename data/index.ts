export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#testimonials" },
  { name: "Resume", link:"#resume"},
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Motivated IT student at NIT Jalndhar with a strong foundation in algorithms and complexity analysis. I build scalable solutions, optimize for performance and validate with tests and benchmarks",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Open to global opportunities, I bring strong problem-solving, adaptability, and teamwork, eager to contribute to impactful, real-world software solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Full-stack developer creating NLP chatbots and APIs",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building The Customer support chatbot and intent classification (NLP)",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// data/index.ts  (append or add near the existing exports)
export const recentProjects = [
  {
    id: "quick-eats",
    title: "QuickEats",
    desc:
      "React front-end consuming live Swiggy API; implemented shimmer placeholders, lazy-loading, dynamic routing & client-side caching; reduced time-to-interactive by 40%; deployed on Vercel via CI/CD."
  },
  {
    id: "study-shot",
    title: "StudyShot",
    desc:
      "Chrome extension (Manifest V3) to batch-save YouTube screencasts; automated download & naming for 100+ videos/day; cut manual capture time by 80%."
  },
  {
    id: "taskmaster-api",
    title: "TaskMasterAPI",
    desc:
      "Node.js/Express microservice with MongoDB; served 1K+ daily requests across eight REST endpoints at 99.9% uptime; achieved 100% Postman test coverage."
  }
];


// data/index.ts (update the projects array to reference new images)
export const projects = [
  {
    id: 1,
    title: "QuickEats",
    des: "React front-end consuming live Swiggy API; implemented shimmer placeholders, lazy-loading, dynamic routing & client-side caching; reduced time-to-interactive by 40%; deployed on Vercel via CI/CD.",
    img: "/images/quickeats.jpg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/your/quickeats"
  },
  {
    id: 2,
    title: "StudyShot",
    des: "Chrome extension (Manifest V3) to batch-save YouTube screencasts; automated download & naming for 100+ videos/day; cut manual capture time by 80%.",
    img: "/images/studyshot.jpg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/your/studyshot"
  },
  {
    id: 3,
    title: "TaskMasterAPI",
    des: "Node.js/Express microservice with MongoDB; served 1K+ daily requests across eight REST endpoints at 99.9% uptime; achieved 100% Postman test coverage.",
    img: "/images/taskmaster.jpg",
    iconLists: ["/node.svg", "/mongo.svg"],
    link: "https://github.com/your/taskmaster"
  }
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development Intern at AD Infocom Systems",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Language Translaor",
    desc: "Designed and developed LLM powered bilingual translator with REST API along with two team members.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "BookTracker Website",
    desc: "Developed Python based CLI tool for personal library management along with two team members.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mastery in reducing complexity of algorithms",
    desc: "Solved 120+ distinct industry level problems with optimal time and space complexity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];


export const skills = [
  {
    name: "DSA",
    sub: "Data Structures & Algorithms",
    desc: "Strong foundation in common data structures (arrays, maps, heaps, trees) and algorithms.\nComfortable solving medium-to-hard problems and optimising time/space complexities.",
    img: "/skills/dsa.svg",
    level: "Experienced",
  },
  {
    name: "React",
    sub: "Frontend / UI",
    desc: "Built multiple production SPAs with React and Next.js.\nComfortable with hooks, context, performance optimisations and component design.",
    img: "/skills/react.svg",
    level: "Advanced",
  },
  {
    name: "Node.js",
    sub: "Backend (JS)",
    desc: "Server-side development using Node.js and Express.\nExperience building REST APIs, middleware and realtime features.",
    img: "/skills/node.svg",
    level: "Advanced",
  },
  {
    name: "PostgreSQL",
    sub: "Relational DB",
    desc: "Designing normalized schemas, writing performant SQL and using migrations.\nFamiliar with indexing, joins, and basic tuning for production loads.",
    img: "/skills/postgresql.svg",
    level: "Intermediate",
  },
  {
    name: "SQL",
    sub: "Querying & Modelling",
    desc: "Strong SQL querying skills: aggregates, window functions, and subqueries.\nAble to translate business requirements into efficient database queries.",
    img: "/skills/sql.svg",
    level: "Advanced",
  },
  {
    name: "Computer Networks",
    sub: "Networking",
    desc: "Solid understanding of OSI model, TCP/IP, routing and HTTP/S.\nFamiliar with network debugging, CORS and basic infra concepts.",
    img: "/skills/network.svg",
    level: "Intermediate",
  },
  {
    name: "Python",
    sub: "General Purpose",
    desc: "Scripting, data-processing and building small backend services.\nComfortable with libraries for web (Flask/FastAPI) and data manipulation.",
    img: "/skills/python.svg",
    level: "Advanced",
  },
  {
    name: "C++",
    sub: "Systems & Competitive",
    desc: "Experience writing performant C++ for algorithms and systems tasks.\nComfortable with pointers, memory management, and STL usage.",
    img: "/skills/cpp.svg",
    level: "Intermediate",
  },
  {
    name: "C",
    sub: "Low-level Programming",
    desc: "Foundational experience with C for systems-level programming.\nUnderstands memory layout, pointers and basic I/O management.",
    img: "/skills/c.svg",
    level: "Intermediate",
  },
  {
    name: "Java",
    sub: "OOP & Backend",
    desc: "Built OOP-based solutions and small backend services in Java.\nFamiliar with core collections, threading basics and JVM concepts.",
    img: "/skills/java.svg",
    level: "Intermediate",
  },
  {
    name: "Operating Systems",
    sub: "OS Concepts",
    desc: "Good grasp of processes, scheduling, concurrency and memory management.\nAble to reason about OS-level tradeoffs and threading models.",
    img: "/skills/os.svg",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    sub: "NoSQL DB",
    desc: "Experience designing document schemas and querying with aggregation pipelines.\nUsed MongoDB for rapid prototyping and flexible data models.",
    img: "/skills/mongodb.svg",
    level: "Intermediate",
  },
  {
    name: "Git",
    sub: "Version Control",
    desc: "Daily driver for source control: branching, rebasing and merges.\nComfortable with collaborative workflows and resolving conflicts.",
    img: "/skills/git.svg",
    level: "Advanced",
  },
  {
    name: "GitHub",
    sub: "Collaboration & CI",
    desc: "Using GitHub for PR workflows, actions and issue-based development.\nFamiliar with releases, tags and protecting branches for teams.",
    img: "/skills/github.svg",
    level: "Advanced",
  },
];

// data/index.ts
export const contact = {
  email: "asifi.it.23@nitj.ac.in",
  phone: "+917050787307", // international format (+91)
  linkedin: "https://linkedin.com/in/asif-irfan-060249373",
  github: "https://github.com/AsifIrfan3393"
};


