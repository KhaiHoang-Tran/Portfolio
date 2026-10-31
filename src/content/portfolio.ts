/** Public portfolio content. Keep this file in sync with verified details. */
export const portfolio = {
  name: "Tran Hoang Khai",
  initials: "TK",
  role: "Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "tkhai1491@gmail.com",
  badge: "Java & Spring Boot developer",
  intro: "Building reliable backend systems and well-structured APIs.",
  summary:
    "Tran Hoang Khai is a Backend Developer studying Software Engineering at FPT University. His featured work is a horse racing tournament management API.",
  about: [
    "I am a Backend Developer studying Software Engineering at FPT University. I expect to graduate in October 2027.",
    "I work with Java, Spring Boot, SQL Server, authentication, and REST APIs. My featured project, HRTMS, covers tournament and race operations alongside registration, transactions, notifications, and scheduled jobs.",
  ],
  github: "https://github.com/KhaiHoang-Tran",
  linkedin: "https://www.linkedin.com/in/kh%E1%BA%A3i-tr%E1%BA%A7n-78737b389/",
  skills: [
    { category: "Languages", items: ["Java", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate"] },
    { category: "Tools & technologies", items: ["SQL Server", "JWT", "Maven", "Spring Mail", "SpringDoc OpenAPI"] },
  ],
  projects: [
    {
      number: "01",
      title: "Horse Racing Tournament Management System",
      abbreviation: "HRTMS",
      type: "Backend API",
      role: "Backend Developer",
      period: "May–July 2026",
      description:
        "A backend for horse racing tournaments and races, with registration, transactions, notifications, and scheduled jobs. Authentication uses JWT and OTP verification, with role-based workflows.",
      tags: ["Java", "Spring Boot", "JPA", "JWT", "REST APIs"],
      stats: ["136 REST endpoints", "24 controllers", "25 JPA entities"],
      github: "https://github.com/KhaiHoang-Tran/HRTMS-BE",
      preview: "hrtms",
    },
  ],
  otherRepositories: [
    { name: "HRTMS-FE", detail: "HRTMS frontend repository", github: "https://github.com/KhaiHoang-Tran/HRTMS-FE" },
    { name: "FPT_Food_PRJ", detail: "FPT Food project repository", github: "https://github.com/KhaiHoang-Tran/FPT_Food_PRJ" },
    { name: "TodoList", detail: "HTML, CSS, and JavaScript project", github: "https://github.com/KhaiHoang-Tran/TodoList" },
  ],
  education: [
    {
      period: "Expected October 2027",
      title: "Software Engineering",
      organization: "FPT University",
    },
  ],
} as const;
