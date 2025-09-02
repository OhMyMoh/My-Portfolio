document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const messageElement = document.getElementById("message");

  if (name === "") {
    messageElement.textContent = "Please enter your name.";
  } else {
    messageElement.textContent = `Message sent successfully, ${name}!`;
    messageElement.style.color = "green";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const bars = document.getElementById("bars");
  const navLinks = document.getElementById("nav-links");

  bars.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Optional: Hide the menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
    }
  });
});
