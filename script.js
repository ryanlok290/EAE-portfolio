// ============================================================
// EDIT THESE TWO LINES WITH YOUR OWN INFO
// ============================================================
const NAME = "Ryan Lok";
const MISSION = "A Secondary 4 student from Presbyterian High School. An aspiring cybersecurity student with dreams to safeguard our nation in today's digital age.";

// ============================================================
// Typing effect for the hero section
// ============================================================
function typeText(el, text, speed, onDone){
  let i = 0;
  el.textContent = "";
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced){
    el.textContent = text;
    if (onDone) onDone();
    return;
  }

  function step(){
    if (i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    } else if (onDone){
      onDone();
    }
  }
  step();
}

window.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('typedName');
  const missionEl = document.getElementById('typedMission');

  typeText(nameEl, NAME, 70, () => {
    nameEl.classList.add('done');
    typeText(missionEl, MISSION, 20);
  });
});

// ============================================================
// Highlight the active nav tab based on scroll position
// ============================================================
const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));
