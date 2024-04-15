function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()


var swiper = new Swiper(".mySwiper", {});

function cardfnc(){
  let card1 = document.querySelector('#card1')
let card2 = document.querySelector('#card2')
let card3 = document.querySelector('#card3')
let card4 = document.querySelector('#card4')



card1.addEventListener('mouseenter', function() {
    card2.style.transform = 'translateX(42%)';
    card3.style.transform = 'translateX(43%)';
    card4.style.transform = 'translateX(43%)';
});

card1.addEventListener('mouseleave', function() {
    card2.style.transform = 'translateX(0%)';
    card3.style.transform = 'translateX(0%)';
    card4.style.transform = 'translateX(0%)';
});


card2.addEventListener('mouseenter', function() {
    card3.style.transform = 'translateX(57%)';
    card4.style.transform = 'translateX(57%)'
});

card2.addEventListener('mouseleave', function() {
    card3.style.transform = 'translateX(0%)';
    card4.style.transform = 'translateX(0%)';
});

card3.addEventListener('mouseenter', function() {
    card4.style.transform = 'translateX(57%)'
});

card3.addEventListener('mouseleave', function() {
    card4.style.transform = 'translateX(0%)';
});
}
cardfnc()

// function start() {
//  gsap.set("body", { scale: 0.5 });
//  gsap.from("body", {
//     yPercent: 100,
//     rotation: 0,
//     ease: "ease",
//     onComplete: function() {
//       gsap.to("body", {
//         yPercent: 0,
//         rotation: 360,
//         duration: 2,
//         ease: "power4.out",
//         onComplete: function() {
//           gsap.to("body", {
//             scale: 1,
//             duration: 2,
//             ease: "power4.out",
//           });
//         }
//       });
//     }
//  });
// }

// start();
