// Dark mode toggle (apply.html only)
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});

// Form handling (no email restriction)
const form = document.getElementById("researchForm");

form.addEventListener("submit", function () {
  // No custom validation
  // Browser HTML5 validation will run automatically
  // If valid → form submits to FormSubmit
});
