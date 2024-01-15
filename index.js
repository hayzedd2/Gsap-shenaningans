gsap.registerPlugin(ScrollTrigger);
// const text1 = new SplitType('.h6-text')
const text2 = new SplitType('.bg-text')
// gsap.to(text1.words, {
//     opacity :1,
//     stagger: 0.06,
//     ease: "bounce.out",
// })
  
gsap.to(text2.lines, {
    duration: 0.5,
    stagger : 0.01,
})
const divs = document.querySelectorAll(".line");
console.log(divs.length)
divs.forEach((div) => {
  const createdDiv = document.createElement('div');
  createdDiv.classList.add('createddiv')
  div.append(createdDiv);
  gsap.to(".createddiv", {
    width : 0,
    duration: 0.7,
    stagger : 0.2,
})

});
