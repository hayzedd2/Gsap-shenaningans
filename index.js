gsap.registerPlugin(ScrollTrigger);
const text = new SplitType('#p-text')
// gsap.from(".word" ,{
//     y :"100%",
//     stagger : 0.02,
//     ease:"power1.out",
//     scrollTrigger : {
//         trigger: "split",
//         // start : "top 80%",
//         markers :true
//     }
// })

gsap.from(".word", {
    y: "50%",
    stagger: 0.025,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "split",
    //   start: "bottom 80%",
      markers: true
    }
})
  