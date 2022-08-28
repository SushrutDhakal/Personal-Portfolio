// Use custom JavaScript here
(function($) {
  "use strict";

  // Preload
  $(window).on("load", function() {
    $(".preloader-wrapper").fadeOut();
  });

  // sidebar navigation
  $(".nav-button a").on("click", function(e) {
    e.preventDefault();
    $(".sidebar-navigation").toggleClass("active");
  });
  $(".side-nav-close-btn a").on("click", function(e) {
    e.preventDefault();
    $(".sidebar-navigation").toggleClass("active");
  });

  $(".side-nav-wrapper ul li a").on("click", function() {
    $(".sidebar-navigation").removeClass("active");
  });

  // extra-area nav-tabs and tab-pane toggle active
  $(".extra-area .nav-tabs li").on("click", function() {
    $(".extra-area .nav-tabs li").removeClass("active");
    $(this).addClass("active");
    $(".extra-area .tab-content .tab-pane").removeClass("active");
    $(".extra-area .tab-content .tab-pane").eq($(this).parent("li").index()).addClass(
      "active"
    );
  });

  // Skill section animation
  $(window).on("scroll", function() {
    $(".percentage").each(function() {
      let element_height = $(this).offset().top + $(this).outerHeight();
      let window_height = $(window).scrollTop() + $(window).height();
      let bar_width_val = $(this).attr("data-value");
      if (window_height > element_height) {
        $(this).css({
          width: bar_width_val
        });
      }
    });
  });

  // Testimonial Carousel
  $(".owl-carousel.testimonial-carousel").owlCarousel({
    item: 1,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="ion-ios-arrow-thin-left"></i>',
      '<i class="ion-ios-arrow-thin-right"></i>'
    ],
    // center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Counter
  $(".counter-number").counterUp({
    delay: 10,
    time: 1000
  });

  // magnific popup
  $(".popup-image-link").magnificPopup({
    type: "image"
  });

  // ScrollIt
  $.scrollIt();

  // scrollUp
  $.scrollUp({
    scrollText: '<i class=" ion-ios-arrow-up"></i>'
  });


  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Sushrut."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


})(jQuery);
