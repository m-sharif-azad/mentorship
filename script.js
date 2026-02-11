// Scroll reveal
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Dark mode
const toggle = document.getElementById("darkToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light");
});

// Load theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
