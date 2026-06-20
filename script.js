const projects = [
  {
    title: "Enterprise Data Migration Assessment",
    type: "Data Assessment",
    description:
      "Technical-functional assessment for a large enterprise context, including dependency analysis, report rationalization, source-to-target mapping, technical documentation and migration roadmap support.",
    skills: ["SQL", "Data Assessment", "Data Mapping", "Documentation", "Power BI", "Data Governance"],
    output: "Assessment pack, mapping documentation, migration support backlog.",
    value: "Improved visibility on dependencies, reduced ambiguity and supported planning for data migration activities."
  },
  {
    title: "Energy Data Platform Knowledge Base",
    type: "Data Engineering",
    description:
      "Analysis and documentation of an enterprise data ecosystem based on pipelines, data layers, feature engineering and analytical models.",
    skills: ["Databricks", "PySpark", "Data Engineering", "Documentation", "Data Architecture"],
    output: "Knowledge base, technical diagrams, architecture notes and onboarding material.",
    value: "Accelerated project understanding and reduced onboarding friction for technical stakeholders."
  },
  {
    title: "Healthcare Sales Analytics Dashboard",
    type: "Business Intelligence",
    description:
      "BI dashboard for sales, customers, agents, products and time trend analysis in a healthcare and medical distribution scenario.",
    skills: ["Power BI", "DAX", "Power Query", "Excel", "Data Visualization"],
    output: "Executive dashboard, KPI layer, product segmentation and commercial trend analysis.",
    value: "Supported commercial decisions through clearer sales performance, customer and product visibility."
  },
  {
    title: "Local CRM & Analytics Platform",
    type: "Operations Platform",
    description:
      "Prototype of a local platform integrating analytics, CRM, ticketing, workflows and operational assistants.",
    skills: ["CRM", "Analytics", "UX/UI", "Workflow", "AI Assistants", "Reporting Automation"],
    output: "Local MVP concept with analytics workspace, CRM flows, ticket states and reporting automation.",
    value: "Transformed static reporting into an operational control layer for clients, sales, requests and follow-ups."
  },
  {
    title: "Personal Finance Web App",
    type: "Web Application",
    description:
      "Full-stack web application for personal budget management, transactions, categories, savings goals, charts and notifications.",
    skills: ["PHP", "MySQL", "Docker", "Chart.js", "Web App Development"],
    output: "Containerized web application with backend, database, frontend screens and charts.",
    value: "Created a structured personal finance workflow with clear budget tracking and visualization."
  },
  {
    title: "Medical CRM Prototype",
    type: "CRM Prototype",
    description:
      "CRM prototype for medical practices with patient management, appointments, interactive calendar, user authentication and digital record foundations.",
    skills: ["PHP", "MySQL", "FullCalendar", "Bootstrap", "CRM Development"],
    output: "CRM prototype with authenticated area, calendar module and core patient workflow.",
    value: "Demonstrated how operational healthcare workflows can be structured into a simple digital CRM experience."
  }
];

const grid = document.querySelector("#projectGrid");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

function renderProjects() {
  grid.innerHTML = projects
    .map((project, index) => {
      const tags = project.skills.map((skill) => `<span class="tag">${skill}</span>`).join("");
      const number = String(index + 1).padStart(2, "0");

      return `
        <article class="project-card">
          <div class="project-card-header">
            <span class="project-index">${number}</span>
            <span class="project-type">${project.type}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list" aria-label="Skills used for ${project.title}">
            ${tags}
          </div>
          <div class="project-meta">
            <div>
              <strong>Output</strong>
              <span>${project.output}</span>
            </div>
            <div>
              <strong>Value generated</strong>
              <span>${project.value}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncHeaderState() {
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.dataset.open === "true";
  nav.dataset.open = String(!isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", syncHeaderState, { passive: true });

renderProjects();
syncHeaderState();
