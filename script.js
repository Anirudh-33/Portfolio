let foreground = document.getElementById('b1');
let fixed_objects = document.getElementById('img-and-border');
let moving_txt = document.getElementById('text-behind');
let body = document.getElementById('body_');
let abt = document.getElementById('head2');
let neon = document.getElementById('neon-wrapper');
let para = document.getElementById('text1');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let fadeInId = null;
let scaleId1 = null;
let scaleId2 = null;
let scaleId3 = null;
let scaleTimeout = null;
let timeout2 = null;
let timeout3 = null;

// Initialize buttons to scale(0) on load
document.addEventListener('DOMContentLoaded', () => {
  btn1.style.transform = 'scale(0)';
  btn2.style.transform = 'scale(0)';
  btn3.style.transform = 'scale(0)';

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
      hoverImage.style.left = `${e.clientX + 10}px`; // Offset to the right
      hoverImage.style.top = `${e.clientY + 20}px`;  // Offset below
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

  // Update other elements' styles
  foreground.style.backgroundColor = `rgb(${b}, ${b}, ${b})`;
  foreground.style.backgroundImage = `linear-gradient(to right, rgb(${c}, ${c}, ${c}) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(${c}, ${c}, ${c}) 1px, transparent 1px)`;
  foreground.style.opacity = `${d}%`;
  moving_txt.style.opacity = `${f_}%`;
  abt.style.marginTop = -25 + a * 5 + '%';
  abt.style.opacity = a * a * 2 - 1;
  if(a>=0.999){
    neon.style.opacity=1;
  }
  else{
    neon.style.opacity=0;
  }

  // Fade-in or instant disappearance for para
  if (a >= 0.999) {
    if (fadeInId !== null) {
      cancelAnimationFrame(fadeInId);
    }

    let startTime = Date.now();

    function fadeIn() {
      let elapsed = Date.now() - startTime;
      let progress = Math.min(elapsed / 1000, 1); // 1-second fade
      para.style.opacity = progress;

      if (progress < 1) {
        fadeInId = requestAnimationFrame(fadeIn);
      } else {
        fadeInId = null;
      }
    }

    fadeInId = requestAnimationFrame(fadeIn);
  } else {
    if (fadeInId !== null) {
      cancelAnimationFrame(fadeInId);
      fadeInId = null;
    }
    para.style.opacity = 0;
  }

  // Sequential scaling at page bottom
  if (a >= 0.999) {
    // Cancel any ongoing animations and timeouts
    if (scaleId1 !== null) cancelAnimationFrame(scaleId1);
    if (scaleId2 !== null) cancelAnimationFrame(scaleId2);
    if (scaleId3 !== null) cancelAnimationFrame(scaleId3);
    if (scaleTimeout !== null) clearTimeout(scaleTimeout);
    if (timeout2 !== null) clearTimeout(timeout2);
    if (timeout3 !== null) clearTimeout(timeout3);

    // Wait 1 second (para's fadeIn duration) before starting
    scaleTimeout = setTimeout(() => {
      // First button
      let startTime1 = Date.now();
      function scaleIn1() {
        let elapsed1 = Date.now() - startTime1;
        let progress1 = Math.min(elapsed1 / 500, 1); // 0.5-second scale
        btn1.style.transform = `scale(${progress1})`;

        if (progress1 < 1) {
          scaleId1 = requestAnimationFrame(scaleIn1);
        } else {
          scaleId1 = null;
          btn1.style.transform = 'scale(1)';
        }
      }
      scaleId1 = requestAnimationFrame(scaleIn1);

      // Second button (starts 0.3 seconds after btn1)
      timeout2 = setTimeout(() => {
        let startTime2 = Date.now();
        function scaleIn2() {
          let elapsed2 = Date.now() - startTime2;
          let progress2 = Math.min(elapsed2 / 500, 1);
          btn2.style.transform = `scale(${progress2})`;

          if (progress2 < 1) {
            scaleId2 = requestAnimationFrame(scaleIn2);
          } else {
            scaleId2 = null;
            btn2.style.transform = 'scale(1)';
          }
        }
        scaleId2 = requestAnimationFrame(scaleIn2);
      }, 200); // 0.3-second delay

      // Third button (starts 0.3 seconds after btn2)
      timeout3 = setTimeout(() => {
        let startTime3 = Date.now();
        function scaleIn3() {
          let elapsed3 = Date.now() - startTime3;
          let progress3 = Math.min(elapsed3 / 500, 1);
          btn3.style.transform = `scale(${progress3})`;

          if (progress3 < 1) {
            scaleId3 = requestAnimationFrame(scaleIn3);
          } else {
            scaleId3 = null;
            btn3.style.transform = 'scale(1)';
          }
        }
        scaleId3 = requestAnimationFrame(scaleIn3);
      }, 400); // 0.3 seconds after btn2 (0.6 seconds total)
    }, 500); // 1-second delay
  } else {
    // Reset all buttons to scale(0) and cancel animations
    if (scaleId1 !== null) cancelAnimationFrame(scaleId1);
    if (scaleId2 !== null) cancelAnimationFrame(scaleId2);
    if (scaleId3 !== null) cancelAnimationFrame(scaleId3);
    if (scaleTimeout !== null) clearTimeout(scaleTimeout);
    if (timeout2 !== null) clearTimeout(timeout2);
    if (timeout3 !== null) clearTimeout(timeout3);
    btn1.style.transform = 'scale(0)';
    btn2.style.transform = 'scale(0)';
    btn3.style.transform = 'scale(0)';
    scaleId1 = null;
    scaleId2 = null;
    scaleId3 = null;
    scaleTimeout = null;
    timeout2 = null;
    timeout3 = null;
  }
}

// Attach scroll listener after page load
window.addEventListener('load', () => {
  handleScroll(); // Initial check
  window.addEventListener('scroll', handleScroll);

});

/////////////////////////////////////////////////////////

