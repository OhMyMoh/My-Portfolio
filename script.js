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
