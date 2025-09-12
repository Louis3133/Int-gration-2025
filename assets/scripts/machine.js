import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paper = document.querySelector(".paper");
const section = document.querySelector(".jacques-ellul-section");

if (paper && section) {
  gsap.set(paper, { maxHeight: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top-=72 center",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })
  .to(paper, {
    maxHeight: () => paper.scrollHeight,
    ease: "none"
  });
}
