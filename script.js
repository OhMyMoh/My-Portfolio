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



const barsMenu = document.querySelector('.bars-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

barsMenu.addEventListener('click', () => {
  barsMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
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