const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});

const form = document.getElementById("researchForm");

form.addEventListener("submit", function (e) {
  const email = form.querySelector('input[name="Email"]').value;

  if (!email.includes(".edu") && !email.includes("ac.")) {
    e.preventDefault();
    alert("Please use an official university email address.");
    return;
  }

  // If validation passes → form submits to FormSubmit
});
