import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".planet img", {
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".planet",
    start: "top bottom",
    end: "+=6000",
    scrub: true,
  },
});
