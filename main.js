document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Animazione "ad entrata" per le sezioni
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.section-animate').forEach(section => {
    observer.observe(section);
  });
});
