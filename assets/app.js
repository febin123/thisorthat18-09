/*this or that */
let anim = document.querySelector('.anim1');
// $('.choice').hide(0);
$('.wrapper2').hide(0);

const checking = () => {

  $('.choice').hide(0);
  for(i=0; i<100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 500;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
  // document.getElementById("p1").innerHTML = "New text!";
  
};
const checking1 = () => {
  $('.wrapper2').show(0);
  $('.choice').hide(0);

};

/*animation */


/*end of animation */

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const header=document.getElementById('hea');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close1);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
function close1(){
  mainMenu.style.top = '110%';
  mainMenu.style.display = 'flex';
    // mainMenu.style.top = '0';
}

window.addEventListener("scroll",function(){
    var header=document.querySelectorAll("nav");
    header.classList.bottom("sticky",window.scrollY>0)

})

/*end of pop up */

/* scroll up*/

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 560) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

/*end of scroll up*/




/*Download now */

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
  });






/*end of download now*/
/* typing animation*/





var acordion = document.getElementsByClassName('accordion');

var i;
var len = acordion.length;
for(i = 0; i<len; i++){
    acordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panal = this.nextElementSibling;
        if(panal.style.maxHeight){
            panal.style.maxHeight = null;
        }else{
            panal.style.maxHeight = panal.scrollHeight + 'px';
        }
    })
}








/*review tab*/

function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
      let randomValue,sArray;
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});


/*start of FAQs*/ 

const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{

  faq.classList.toggle("active");
})
})

/*end of FAQs*/


/*contact*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});








/*start of marquee */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/*end of marquee */