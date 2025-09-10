const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      msg.style.display = "block"; // Show success
      form.reset(); // Clear form
    } else {
      msg.textContent = "❌ Oops! Something went wrong.";
      msg.style.display = "block";
      msg.style.color = "red";
    }
  } catch (error) {
    msg.textContent = "❌ Network error. Please try again.";
    msg.style.display = "block";
    msg.style.color = "red";
  }
});

const barsMenu = document.querySelector(".bars-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

barsMenu.addEventListener("click", () => {
  barsMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// document.addEventListener("DOMContentLoaded", () => {
//   const openBtn = document.getElementById("open-btn");
//   const closeBtn = document.getElementById("close-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

//   openBtn.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
//   });

//   closeBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//   });
// });
