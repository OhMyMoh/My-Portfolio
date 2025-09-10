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

const openBtn = document.getElementById('open-btn');
const offScreenMenu = document.querySelector('.off-screen-menu');
const barsMenu = document.querySelector('.bars-menu');

openBtn.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.off-screen-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        offScreenMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!offScreenMenu.contains(e.target) && !openBtn.contains(e.target)) {
        offScreenMenu.classList.remove('active');
    }
});