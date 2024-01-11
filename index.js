gsap.registerPlugin(ScrollTrigger);
// const text = new SplitType('#p-text')
const text1 = new SplitType('.h6-text')
gsap.to(".word", {
    opacity :1,
    stagger: 0.06,
    ease: "bounce.out",
})
  