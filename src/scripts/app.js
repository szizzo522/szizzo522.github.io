document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamic-text");
  const roles = ["Applied/Data Scientist", "Data Engineer", "Cybersecurity Professional"];
  let index = 0;

  setInterval(() => {
    dynamicText.textContent = roles[index];
    index = (index + 1) % roles.length; // Loop back to the first role
  }, 3000); // Change text every 3 seconds
});