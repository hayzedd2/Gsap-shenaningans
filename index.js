gsap.registerPlugin(ScrollTrigger);
// Draggable.create(".circle", {
//   inertia :true,
//   type : "x,y",
//   bounds: ".circle-flex",
//   ease : "bounce.out"
// });

const text = new SplitType('#p-text')

// gsap.to('.char' ,{
//     y :0,
//     stagger : 0.02,

// })

// let tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
// tl.to("span", { y: "0%", duration: 0.5, stagger: 0.1})

gsap.from(".word" ,{
    y :130,
    stagger : 0.02,
    ease:"back.out",
    scrollTrigger : {
        trigger: "split",
        // start : "top 80%",
        markers :true
    }
})