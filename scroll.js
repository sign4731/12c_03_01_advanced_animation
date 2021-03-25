"use strict";

gsap.registerPlugin(ScrollTrigger);

const fadingTextProperties = {
  duration: 600,
  iterations: 1,
  easing: "ease-out",
  fill: "forwards",
  delay: 100,
};

const fadingTextAnimation = [
  { transform: "translate(0,7vw)", opacity: 0 },
  { transform: "translate(0)", opacity: 1 },
];

document.addEventListener("DOMContentLoaded", startWindowLoadedAnimation);

function startWindowLoadedAnimation() {
  const elementToAnimate = document.querySelector(".text_wrapper_1");
  elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);

  setupScrollAnimationsBike();
  setupScrollAnimationsText();
  setupScrollBarAnimation();
}

function setupScrollBarAnimation() {
  gsap.to("#scrollbar-bar", { transform: "scaleY(7.98)", scrollTrigger: { trigger: "main", markers: false, start: "top top", end: "bottom bottom", scrub: true } });
}

function setupScrollAnimationsText() {
  const tlsTextAnimationOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_frame",
      scrub: true,
      markers: false,
      start: "bottom 40%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_2");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
        document.querySelector(".text_wrapper_2").classList.add("animation_done");
      }
    },
  });
  tlsTextAnimationOne.to(".text_wrapper", { y: "0" });

  const tlsTextAnimationTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_wheels",
      scrub: true,
      markers: false,
      start: "bottom 40%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_3");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
        document.querySelector(".text_wrapper_3").classList.add("animation_done");
      }
    },
  });
  tlsTextAnimationTwo.to(".text_wrapper", { y: "0" });

  const tlsTextAnimationThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_saddle",
      scrub: true,
      markers: false,
      start: "bottom 40%",
      end: "bottom 0%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_4");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
        document.querySelector(".text_wrapper_4").classList.add("animation_done");
      }
    },
  });
  tlsTextAnimationThree.to(".text_wrapper", { y: "0" });

  const tlsTextAnimationFour = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_darkmode",
      scrub: true,
      markers: false,
      start: "top 40%",
      end: "top 40%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector(".text_wrapper_5");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
        document.querySelector(".text_wrapper_5").classList.add("animation_done");
      }
    },
  });
  tlsTextAnimationFour.to(".text_wrapper", { y: "0" });

  const tlsTextAnimationFive = gsap.timeline({
    scrollTrigger: {
      trigger: "#last_scrollpage",
      scrub: true,
      markers: false,
      start: "top 40%",
      end: "top 40%",
    },
    onStart: () => {
      const elementToAnimate = document.querySelector("#last_scrollpage > h2");
      if (!elementToAnimate.classList.contains("animation_done")) {
        elementToAnimate.animate(fadingTextAnimation, fadingTextProperties);
        document.querySelector("#last_scrollpage > h2").classList.add("animation_done");
      }
    },
  });
  tlsTextAnimationFive.to(".text_wrapper", { y: "0" });
}

function setupScrollAnimationsBike() {
  const tlsBikeAnimationOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_frame",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlsBikeAnimationOne.to(".scroll_bike_frame", { y: "100vh" });

  const tlsBikeAnimationTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_wheels",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlsBikeAnimationTwo.to(".scroll_bike_frame", { y: "200vh" });
  tlsBikeAnimationTwo.to(".scroll_bike_wheels1", { y: "100vh" }, 0);

  const tlsBikeAnimationThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_saddle",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlsBikeAnimationThree.to(".scroll_bike_frame", { y: "300vh" }, 0);
  tlsBikeAnimationThree.to(".scroll_bike_wheels1", { y: "200vh" }, 0);
  tlsBikeAnimationThree.to(".scroll_bike_saddle", { y: "100vh" }, 0);

  const tlsBikeAnimationFour = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_grip",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlsBikeAnimationFour.to(".scroll_bike_frame", { y: "400vh" }, 0);
  tlsBikeAnimationFour.to(".scroll_bike_wheels1", { y: "300vh" }, 0);
  tlsBikeAnimationFour.to(".scroll_bike_saddle", { y: "200vh" }, 0);
  tlsBikeAnimationFour.to("#dark_overlay", { opacity: 1 }, 0);

  const tlsBikeAnimationFive = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll_container_grip",
      scrub: true,
      markers: false,
      start: "bottom 100%",
      end: "bottom 0%",
    },
  });

  tlsBikeAnimationFive.to(".scroll_bike_grip1", { y: "100vh" });

  const tlsBikeAnimationSix = gsap.timeline({
    scrollTrigger: {
      trigger: "#last_scrollpage",
      scrub: true,
      markers: false,
      start: "top 100%",
      end: "top 0%",
    },
  });

  tlsBikeAnimationSix.to("#dark_overlay", { opacity: 0 });
}
