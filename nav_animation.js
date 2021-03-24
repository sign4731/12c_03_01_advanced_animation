"use strict";

window.addEventListener("DOMContentLoaded", runMenubarAnimation);

function runMenubarAnimation() {
  gsap.to("nav", { duration: 1, y: 0 });
}
