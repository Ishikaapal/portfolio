// Show scroll-to-top button
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display =
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
      ? "block"
      : "none";
};

// Scroll to top smoothly
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Video Modal
const playBtn = document.getElementById("playVideoBtn"); // ID from the trigger button
const modal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");
const videoIframe = document.getElementById("videoIframe");

playBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  videoIframe.src =
    "https://drive.google.com/file/d/189wDvv1M4o2x7RwcjyFevH6n1tNhcbaD/preview";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  videoIframe.src = ""; // stop video
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    videoIframe.src = ""; // stop video
  }
});

//sroll Effacr JS Code
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }