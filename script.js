document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".toggle-button");
  const message = document.getElementById("toggle-text");

  if (button && message) {
    button.addEventListener("click", function () {
      if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
        button.textContent = "I'm Still Useless Button but I can hide the Message";
      } else {
        message.style.display = "none";
        button.textContent = "I'm a Useless Button";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/.netlify/functions/time")
    .then((res) => res.json())
    .then((data) => {
      const display = document.getElementById("time-display");
      if (display) display.textContent = data.time;
    })
    .catch((err) => {
      const display = document.getElementById("time-display");
      if (display) display.textContent = "Failed to load time.";
      console.error(err);
    });
});