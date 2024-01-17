gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
const text1 = new SplitType(".h6-text");
gsap.to(text1.words, {
  opacity: 1,
  stagger: 0.06,
  ease: "bounce.out",
});

gsap.to(".square", {
  x : 600,
  duration : 2.5,
  scrollTrigger : ".square",
})