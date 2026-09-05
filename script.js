const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((a) => {
    a.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
