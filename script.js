// Dynamism only: theme toggle, mobile nav, scroll-reveal, active-link
// highlighting. No portfolio content lives in this file.

document.getElementById("year").textContent = new Date().getFullYear();

/* Theme toggle, persisted in localStorage */
const THEME_KEY = "portfolio-theme";
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  applyTheme("light");
}

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

/* Mobile nav toggle */
const navToggle = document.getElementById("nav-toggle");
const sidebar = document.getElementById("sidebar");

navToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* Scroll-reveal for sections */
const sections = document.querySelectorAll(".section");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
sections.forEach((section) => revealObserver.observe(section));

/* Active nav-link highlighting as the user scrolls */
const navLinks = document.querySelectorAll(".nav-link");
const linkByHref = new Map();
navLinks.forEach((link) => linkByHref.set(link.getAttribute("href"), link));

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = linkByHref.get(`#${entry.target.id}`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
sections.forEach((section) => activeObserver.observe(section));
