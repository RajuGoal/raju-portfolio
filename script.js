// Download CV button action
function downloadCV() {
  alert("Your CV is downloading...");
  // In real project: window.location.href = "cv.pdf";
}

// Example: Scroll to About Me when user presses "L" key
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "l") {
    document
      .querySelector("section:nth-of-type(3)")
      .scrollIntoView({ behavior: "smooth" });
  }
});
