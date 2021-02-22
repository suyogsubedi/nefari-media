// Register Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".our-vision", {
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

gsap.from(".phone-image", {
  duration: 2,

  scale: 0.3,

  ease: "linear",
  scrollTrigger: {
    trigger: ".phone-image",
    opacity: 0,
  },
});

gsap.from(".mac-image-phone", {
  duration: 3,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".mac-image-phone",
    scale: 0.4,
  },
});

gsap.from(".half-box", {
  duration: 3,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".mac-image-phone",
    scale: 0.4,
  },
});

gsap.from(".square-box-footer", {
  duration: 3,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".mac-image-phone",
    scale: 0.4,
  },
});

// Desktop
gsap.from(".square-box-macbook", {
  duration: 3,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".mac-image-phone",
    scale: 0.4,
  },
});

// Animation For Insight Page
gsap.from(".nav-top,.nav-texts", {
  duration: 2,
  opacity: 0,
  scale: 0.1,
  ease: "linear",
});
gsap.from("#trigger", {
  duration: 1,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: "#trigger",
    scale: 0.4,
  },
});

gsap.from(".left-footer", {
  duration: 1,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".left-footer",
    scale: 0.4,
  },
});
gsap.from(".social", {
  duration: 1,
  scale: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: ".left-footer",
    scale: 0.4,
  },
});
