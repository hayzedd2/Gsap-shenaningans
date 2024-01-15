gsap.registerPlugin(ScrollTrigger);
const text1 = new SplitType('.h6-text')
const text2 = new SplitType('.bg-text')
gsap.to(text1.words, {
    opacity :1,
    stagger: 0.06,
    ease: "bounce.out",
})
  
gsap.to(text2.lines, {
    backgroundColor : 'red',
    duration: 0.5,
    stagger : 0.01,
})
  