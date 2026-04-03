const typingText = ["Full Stack Developer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  if (i < typingText.length) {
    if (!isDeleting && j <= typingText[i].length) {
      current = typingText[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = typingText[i].substring(0, j--);
    }

    document.getElementById("typing").innerText = current;

    if (!isDeleting && j === typingText[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Wait before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % typingText.length;
      setTimeout(typeEffect, 400); // Delay before typing next
    } else {
      setTimeout(typeEffect, isDeleting ? 100 : 160); // slower typing & deleting
    }
  }
}
typeEffect();
AOS.init({
  duration: 1200,
  offset: 150,
  easing: 'ease-in-out',
  once: true
});

  // Show the button when the user scrolls down
  window.onscroll = function () {
    const btn = document.querySelector(".scroll-top-btn");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  // Scroll smoothly to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
