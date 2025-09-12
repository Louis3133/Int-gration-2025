import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parchment = document.querySelector(".parchemin");
const section = document.querySelector(".saint-seurin-section");

if (parchment && section) {
  // ✅ On part avec 50px de hauteur visibles
  gsap.set(parchment, { height: 75, overflow: "hidden" });

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top-=250 top", // ton start personnalisé
      end: "+=1000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })
  .to(parchment, {
    height: () => parchment.scrollHeight,
    ease: "none"
  });
}
