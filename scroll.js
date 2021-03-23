"use strict";

gsap.registerPlugin(ScrollTrigger);

const fadingTextProperties = {
  duration: 600,
  iterations: 1,
  easing: "ease-out",
  fill: "forwards",
  delay: 500,
};

const fadingTextAnimation = [
  { transform: "translate(0,7vw)", opacity: 0 },
  { transform: "translate(0)", opacity: 1 },
];

document.addEventListener("DOMContentLoaded", startWindowLoadedAnimation);

function startWindowLoadedAnimation() {
  const elementToAnimate = document.querySelector(".text_wrapper_1");
  if (!elementToAnimate.classList.contains("animation_done")) {
    elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
  }
  setupScrollAnimations();
}

function setupScrollAnimations() {
  const tlOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_frame",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_2");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
      }
    },
  });

  tlOne.to(".scroll_bike_frame", { y: "100vh" });

  const tlTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_wheels",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_3");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
      }
    },
  });

  tlTwo.to(".scroll_bike_frame", { y: "200vh" });
  tlTwo.to(".scroll_bike_wheels1", { y: "100vh" }, 0);

  const tlThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_saddle",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_4");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
      }
    },
  });

  tlThree.to(".scroll_bike_frame", { y: "300vh" }, 0);
  tlThree.to(".scroll_bike_wheels1", { y: "200vh" }, 0);
  tlThree.to(".scroll_bike_saddle", { y: "100vh" }, 0);

  const tlFour = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_grip",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_5");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
      }
    },
  });

  tlFour.to(".scroll_bike_frame", { y: "400vh" }, 0);
  tlFour.to(".scroll_bike_wheels1", { y: "300vh" }, 0);
  tlFour.to(".scroll_bike_saddle", { y: "200vh" }, 0);
  tlFour.to("#dark_overlay", { opacity: 1 }, 0);

  const tlFive = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_grip",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlFive.to(".scroll_bike_grip1", { y: "100vh" });

  const tlSix = gsap.timeline({
    scrollTrigger: {
      trigger: "#last_scrollpage",
      scrub: true,
      markers: false,
      start: "top 100%",
      end: "top 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector("#last_scrollpage > h2");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
      }
      cancelFadeAnimation();
    },
  });

  tlSix.to("#dark_overlay", { opacity: 0 });
}

function cancelFadeAnimation() {
  console.log("cancelFadeAnimation");
  document.querySelector(".text_wrapper_2").classList.add("animation_done");
  document.querySelector(".text_wrapper_3").classList.add("animation_done");
  document.querySelector(".text_wrapper_4").classList.add("animation_done");
  document.querySelector(".text_wrapper_5").classList.add("animation_done");
  document.querySelector("#last_scrollpage > h2").classList.add("animation_done");
}
