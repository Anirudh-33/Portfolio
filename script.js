let foreground = document.getElementById('b1');
let fixed_objects = document.getElementById('img-and-border');
let moving_txt = document.getElementById('text-behind');
let body = document.getElementById('body_');
let abt = document.getElementById('head2');
let neon = document.getElementById('neon-wrapper');
let para = document.getElementById('intro');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let hoverLinks = document.querySelectorAll('.hover-link');


const display = document.getElementById('value-display');
const display2 = document.getElementById('value-display2');
let value = 0;




let fadeInId = null;
let scaleId1 = null;
let scaleId2 = null;
let scaleId3 = null;
let scaleTimeout = null;
let timeout2 = null;
let timeout3 = null;

// Initialize buttons to scale(0) on load
document.addEventListener('DOMContentLoaded', () => {

  // btn1.style.transform = 'scale(0)';
  // btn2.style.transform = 'scale(0)';
  // btn3.style.transform = 'scale(0)';

  ////////////////

  // image hover
  const links = document.querySelectorAll('.hover-link');
  const hoverImage = document.getElementById('hover-image');

  links.forEach(link => {
    // On mouse enter (hover start)
    link.addEventListener('mouseenter', () => {
      const imageUrl = link.getAttribute('data-image');
      if (imageUrl) {
        hoverImage.src = imageUrl;
        hoverImage.style.display = 'block';
      }
    });

    // On mouse leave (hover end)
    link.addEventListener('mouseleave', () => {
      hoverImage.style.display = 'none';
    });

    // Update image position on mouse move
    link.addEventListener('mousemove', (e) => {
      // Position the image below and slightly offset from the cursor
      hoverImage.style.left = `${e.clientX}px`; // Offset to the right
      hoverImage.style.top = `${e.clientY}px`;  // Offset below
    });
  });

  ////////////////

});

// Scroll handler
function handleScroll() {
  const scrl = window.scrollY;
  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
  // Skip if maxScrollY is 0 or undefined (page not ready)
  if (maxScrollY <= 0) {
    btn1.style.transform = 'scale(0)';
    btn2.style.transform = 'scale(0)';
    btn3.style.transform = 'scale(0)';
    return;
  }
  const a = scrl / maxScrollY;
  let b = 211 - a * 211;
  let c = 223 - a * 206;
  const d = a * 100;
  const f = 100 - d * 1.8;
  let f_ = Math.max(0, f);
}
// Attach scroll listener after page load
window.addEventListener('load', () => {
  handleScroll(); // Initial check
  window.addEventListener('scroll', handleScroll);

});

document.addEventListener('DOMContentLoaded', () => {
  const hoverImage = document.getElementById('glow-ball');

  document.addEventListener('mousemove', (e) => {
  // Position the image below and slightly offset from the cursor
  hoverImage.style.left = `${e.clientX}px`; // Offset to the right
  hoverImage.style.top = `${e.clientY}px`;  // Offset below
  });
});

// Auto blur
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".head4",
    start: "top 500vh",    // Adjusted so the first h4 starts focusing sooner
    end: "top 150vh",   // Adjusted to give more scroll "room" for the sequence
    scrub: 1.2,
    markers: false
  }
});

// Phase 1: Blur everything IN (Entry)
// We use stagger: 1 and duration: 1 so they follow each other perfectly
tl.from(".head4 h4", {
  filter: "blur(5px)",
  stagger: 1, 
  duration: 0.3,
  ease: "linear"
})
// Phase 2: Blur everything OUT (Exit)
// The "stagger: 1" here ensures H4 #1 blurs out as H4 #2 is blurring in
.to(".head4 h4", {
  filter: "blur(5px)",
  stagger: 1,
  duration: 0.3,
  ease: "linear"
}, 1); // This "1" start time offset is the secret—it starts the exit as soon as the first entry finishes

/////////////////////

// Buttons scaling and visiblity

// === BUTTONS ANIMATION (reliable version) ===
gsap.fromTo(".btn",
  {
    scale: 0,
    opacity: 0,
    y: 100
  },
  {
    scrollTrigger: {
      trigger: "#btns",
      start: "top 80%",     // triggers when buttons enter viewport
      toggleActions: "play none none reverse",
      markers: true
    },
    scale: 1,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
  }
);
/////////////////////////////////////////////////////////

//Print the variable value on page
// function updateValue() { 
  
//   // Update the text on the page
//   display.innerText = `Value: ${b}`;
//   display.innerText = `Value: ${c}`;
// }
// setInterval(updateValue, 50);

