const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const printButton = document.querySelector("#printButton");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

printButton?.addEventListener("click", () => window.print());

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:lanianjayc@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app…";
});

document.querySelector("#year").textContent = new Date().getFullYear();
