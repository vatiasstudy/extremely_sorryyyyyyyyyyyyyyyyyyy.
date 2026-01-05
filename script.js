const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".next");
const overlay = document.getElementById("magic-overlay");
const floating = document.getElementById("floating");
const sprinkleText = document.getElementById("sprinkle-text");

let current = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    overlay.style.display = "block";

    setTimeout(() => {
      overlay.style.display = "none";
      pages[current].classList.remove("active");
      current++;
      if (current < pages.length) {
        pages[current].classList.add("active");
      }
    }, 800);
  });
});

/* FLOATING ICONS */
const icons = ["💖","✨","🦋","🌸","🌼","💫"];
setInterval(() => {
  const span = document.createElement("span");
  span.textContent = icons[Math.floor(Math.random()*icons.length)];
  span.style.left = Math.random()*100 + "vw";
  span.style.animationDuration = Math.random()*4 + 5 + "s";
  floating.appendChild(span);
  setTimeout(() => span.remove(), 9000);
}, 300);

/* LAST PAGE TEXT SPRINKLE */
setInterval(() => {
  const t = document.createElement("div");
  t.textContent = "🌸 manja ab pleasee sorry 🌸";
  t.style.position = "absolute";
  t.style.left = Math.random()*100 + "vw";
  t.style.top = "-40px";
  t.style.fontSize = "18px";
  t.style.animation = "float 8s linear";
  sprinkleText.appendChild(t);
  setTimeout(() => t.remove(), 8000);
}, 500);
