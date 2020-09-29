import '../sass/main.scss';

import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import variables from '../sass/abstracts/_variables.scss';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin);

// FIXME - should wrap everything inside a document ready function
// $(document).ready() 

const indicator1 = $('#indicator-1');
const indicator2 = $('#indicator-2');
const indicator3 = $('#indicator-3');
const indicator4 = $('#indicator-4');
const indicator5 = $('#indicator-5');
const indicator6 = $('#indicator-6');
indicator1.click(() => gsapScroll('#header'))
indicator2.click(() => gsapScroll('.intro__section'))
indicator3.click(() => gsapScroll('.section2__section'))
indicator4.click(() => gsapScroll('.section4__section'))
indicator5.click(() => gsapScroll('.section6__section'))
indicator6.click(() => gsapScroll('.solutions__section'));

$('.nav__title--1').click(() => {
  gsapScroll('.intro__section');
  navFunc()
})
$('.nav__title--2').click(() => {
  gsapScroll('#solutions--start');
  navFunc()
})
$('.nav__item--aws--1').click(() => {
  gsapScroll('.section2__section');
  navFunc()
})
$('.nav__item--aws--2').click(() => {
  gsapScroll('.section4__section');
  navFunc()
})
$('.nav__item--aws--3').click(() => {
  gsapScroll('.section6__section');
  navFunc()
});
$('.nav__item--aws--4').click(() => {
  gsapScroll('.section4__section');
  navFunc()
});

$('.nav__focus--1').click(() => {
  gsapScrollHigher('#solutions--1');
  navFunc()
});
$('.nav__focus--2').click(() => {
  gsapScrollHigher('#solutions--2');
  navFunc()
});

$('.nav__sub-item-1').click(() => {
  gsapScrollHigher('#solutions--1-1');
  navFunc()
});
$('.nav__sub-item-2').click(() => {
  gsapScrollHigher('#solutions--1-2');
  navFunc()
});
$('.nav__sub-item-3').click(() => {
  gsapScrollHigher('#solutions--1-3');
  navFunc()
});
$('.nav__sub-item-4').click(() => {
  gsapScrollHigher('#solutions--2-4');
  navFunc()
});
// $('.nav__sub-item-5').click(() => {
//   gsapScrollHigher('#solutions--2-1');
//   navFunc()
// });
// $('.nav__sub-item-6').click(() => {
//   gsapScrollHigher('#solutions--2-2');
//   navFunc()
// });
// $('.nav__sub-item-7').click(() => {
//   gsapScrollHigher('#solutions--2-3');
//   navFunc()
// });
// $('.nav__sub-item-8').click(() => {
//   gsapScrollHigher('#solutions--2-4');
//   navFunc()
// });

function navFunc() {
  if ($(window).width() >= 1024) {
    closeNav()
  } else if ($(window).width() <= 1023) {
    $('.menu-dd').toggleClass('active')
    $('.hamburger-icon').toggleClass('active')
  }
}

function gsapScroll(id) {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: id,
      offsetY: 50
    }
  })
}
function gsapScrollHigher(id) {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: id,
      offsetY: 75
    }
  })
}

gsapColorSection(indicator1, '#header', '.video__section')
gsapColorSection(indicator2, '.intro__section','.section1__section')
gsapColorSection(indicator3, '.section2__section', '.section3__section')
gsapColorSection(indicator4, '.section4__section', '.section5__section')
gsapColorSection(indicator5, '.section6__section')
gsapColorSection(indicator6, '.solutions__section', '.contact__selection')
// gsapColorSection(indicator7, '.section5__section')
// gsapColorSection(indicator8, '.section6__section')
// gsapColorSection(indicator9, '#solutions--start')
// gsapColorSection(indicator7, '#solutions--start', '#solutions--1-4')
// gsapColorSection(indicator8, '#solutions--2', '#solutions--2-4')

// ------------- Arrow functions ------------- 
$('.sidebar-nav__navigation--prev').click(() => gsapScroll('.arrow-prev'))
$('.sidebar-nav__navigation--next').click(() => gsapScroll('.arrow-next'))

// $('.sidebar-nav__arrowDown').click(() => { gsapScroll('.intro__section') })
var position = 1
function gsapColorSection(indicator, sectionIdentifier, endSection) {
  gsap.to(
    indicator, {
    scrollTrigger: {

      trigger: sectionIdentifier,
      endTrigger: endSection,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: 'restart reverse restart reverse',
      onToggle: (self) => {
        if (self.isActive) {

          if (self.vars.trigger === '#header') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('#header').addClass('arrow-prev');
            $('.intro__section').addClass('arrow-next')
          } else if (self.vars.trigger === '.intro__section') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('#header').addClass('arrow-prev');
            $('.section2__section').addClass('arrow-next')
          } else if (self.vars.trigger === '.section2__section') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('.intro__section').addClass('arrow-prev')
            $('.section4__section').addClass('arrow-next')

          } else if (self.vars.trigger === '.section4__section') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('.section2__section').addClass('arrow-prev');
            $('.section6__section').addClass('arrow-next')

          } else if (self.vars.trigger === '.section6__section') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('.section4__section').addClass('arrow-prev');
            $('#solutions--start').addClass('arrow-next')

          } else if (self.vars.trigger === '.solutions__section') {
            $('.anchor').removeClass('arrow-next arrow-prev');
            $('.section6__section').addClass('arrow-prev');
            // $('#solutions--2').addClass('arrow-next')

          }

        }
      }
    },
    backgroundColor: variables.secondary,
    ease: 'none',
    duration: .01
  })
}

// ----------------------------------------------------
// Sticky Navigation Function
// ----------------------------------------------------
$(window).resize(checkSize)
$(document).ready(() => {
  if ($(window).width() >= 1024) {
    checkSize()
  } else if ($(window).width() <= 1023) {
    $('video').remove()
  }
})
function checkSize() {
  window.onscroll = () => {
    addStickyNav();
  }
}

const navbar = document.querySelector('.navigation')
const header = document.querySelector('#header')
const sticky = header.offsetHeight;
function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
    $('.nav__menu').removeAttr('style')
  }
}

// Hamburger Icon functionality - below 1024px 
// TODO - implement touch screen detection for media queries
$('.hamburger-icon').click(() => {
  $('.menu-dd').toggleClass('active')
  $('.hamburger-icon').toggleClass('active')
})



// ----------------------------------------------------------------
// Animating stickyNav when on hover
// ----------------------------------------------------------------
const navMenu = $('.nav__menu')
$('.navigation').hover(() => {
  if ($('.navigation').hasClass('sticky')) {
    gsap.to('.nav__menu', {
      height: 'auto',
      maxHeight: 'auto',
      duration: .3,
      autoAlpha: 1
    })
  }
},
  () => {
    closeNav()
  }
)

function closeNav() {
  if ($('.navigation').hasClass('sticky')) {
    gsap.to(navMenu, {
      height: 0,
      duration: .3,
      autoAlpha: 0,
    })
  }
}


// ----------------------------------------------------------------
// Animate Video Headline
// ----------------------------------------------------------------
const headlineTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.video__section',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
})
headlineTl.from('.video__text-box', {
  duration: 1,
  opacity: 0
})


// ----------------------------------------------------------------
// Animate Intro Section
// ----------------------------------------------------------------

const whyTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro__section',
    start: 'top 70%'
  },
})
whyTl.from('.intro__title', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
whyTl.from('.intro__text', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

// ----------------------------------------------------------------
// Animate Section 2
// ----------------------------------------------------------------

const section2TL1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2__section',
    start: 'top 70%'
  },
})
section2TL1.from('.section2__section .header__secondary', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
section2TL1.from('.section2__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

const section2Img1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2__img',
    start: 'top 70%',
    toggleActions: 'play none none reverse'
  },
})
section2Img1.from(".section2__img", {
  opacity: 0,
  duration: 1,
  x: '20%',
})

const section2List1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2__list',
    start: 'top 70%',
    toggleActions: 'play none none reverse'
  },
})

section2List1.from('.section2__item', {
  x: '-10%',
  stagger: .3,
  opacity: 0,
  duration: 1,
}, '-=.75')
section2List1.from('.section2__item img', {
  rotate: '-180',
  stagger: .3,
  opacity: 0,
  duration: 1.5,
}, '<')


// ----------------------------------------------------------------
// Animate Quote Section
// ----------------------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: '.quote__section--1',
    start: 'top 70%',
  },
}).from('.quote__section--1 .quote__text', {
  x: '25%',
  opacity: 0,
  transformOrigin: 'top top',
  duration: 1,
}, '-=.5')

gsap.timeline({
  scrollTrigger: {
    trigger: '.quote__section--3',
    start: 'top 70%',
  },
}).from('.quote__section--3 .quote__text', {
  x: '25%',
  opacity: 0,
  transformOrigin: 'top top',
  duration: 1,
}, '-=.5')

gsap.timeline({
  scrollTrigger: {
    trigger: '.quote__section--5',
    start: 'top 70%',
  },
}).from('.quote__section--5 .quote__text', {
  x: '25%',
  opacity: 0,
  transformOrigin: 'top top',
  duration: 1,
}, '-=.5')

// ----------------------------------------------------------------
// Animate Section 4
// ----------------------------------------------------------------

const section4TL1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section4__section',
    start: 'top 70%'
  },
})
section4TL1.from('.section4__section .section4__header', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
section4TL1.from('.section4__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

// ----------------------------------------------------------------
// Animate Section 6
// ----------------------------------------------------------------

const section6TL1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section6__section',
    start: 'top 70%'
  },
})
section6TL1.from('.section6__section .section6__header', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
section6TL1.from('.section6__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

const section6Img1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section6__img',
    start: 'top 70%',
    toggleActions: 'play none none reverse'
  },
})
section6Img1.from(".section6__img", {
  opacity: 0,
  duration: 1,
  x: '20%',
})


// ----------------------------------------------------------------
// Animate First Section Intro of Partner
// ----------------------------------------------------------------

const partnerFirst = gsap.timeline({
  scrollTrigger: {
    trigger: '#solutions--1',
    start: 'top 70%',
    // toggleActions: 'restart none none reverse',
  },
  ease: "power3.out",
})
partnerFirst.from('#solutions--1 .solutions__sub', {
  x: '10%',
  opacity: 0,
  duration: .5,
}, '-=.25')
partnerFirst.from('#solutions--1 .pg', {
  opacity: 0,
  duration: .75,
}, '-=.1')

// const partnerSecond = gsap.timeline({
//   scrollTrigger: {
//  
//     trigger: '#solutions--2.solutions__flex',
//     start: 'top 70%',
//     // toggleActions: 'restart none none reverse',
//     // markers: true
//   },
//   ease: "power3.out",
// })
// partnerSecond.from('.solutions__num-2', {
//   opacity: 0,
//   x: '-100',
//   duration: .5
// })
// partnerSecond.from('#solutions--2 .solutions__sub', {
//   x: '10%',
//   opacity: 0,
//   duration: .5,
// }, '-=.25')
// partnerSecond.from('#solutions--2  p', {
//   opacity: 0,
//   duration: .75,
// }, '-=.1')

// ----------------------------------------------------------------
// Animate Features-box Intro of Partner
// ----------------------------------------------------------------
const featureBoxAnimation = (featureBoxId) => {
  gsap.timeline({
    scrollTrigger: {

      trigger: `${featureBoxId}`,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    ease: "power1.out",
  }).from(`${featureBoxId} .feature-box__line`, {
    width: '0%',
    duration: .35
  }).from(`${featureBoxId} .feature-box__container`, {
    scaleY: 0,
    transformOrigin: 'top top',
    opacity: 0,
    duration: .35,
  }).from(`${featureBoxId} .feature-box__left`, {
    opacity: 0,
    duration: .5,
  }).from(`${featureBoxId}  .feature-box__item`, {
    x: '-10%',
    opacity: 0,
    stagger: .15,
    duration: .5,
  }, '-=.25')
}

featureBoxAnimation('#solutions--1-1');
featureBoxAnimation('#solutions--1-2');
// featureBoxAnimation('#solutions--2-1');
// featureBoxAnimation('#solutions--2-2');

// ----------------------------------------------------------------
// Animate Features-box Intro of Partner
// ----------------------------------------------------------------
const ctaAnimation = (ctaId) => {
  gsap.timeline({
    scrollTrigger: {

      trigger: `${ctaId}`,
      start: 'top 70%',
    },
    ease: "power1.out",
  }).from(`${ctaId} .icon-box__img`, {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
    duration: .35
  }).from(`${ctaId} .icon-box__title`, {
    opacity: 0,
    duration: .35,
  }, '-=.2').from(`${ctaId}  .icon-box__item`, {
    x: '-10%',
    opacity: 0,
    stagger: .15,
    duration: .5,
  }, '-=.2').from(`${ctaId}  .icon-box__arrow`, {
    rotate: '-180',
    stagger: .15,
    duration: 1.5
  }, '<')
}

ctaAnimation('#solutions--1-3')
ctaAnimation('#solutions--2-4')
// ctaAnimation('#solutions--2-3')
// ctaAnimation('#solutions--2-4')


// ----------------------------------------------------------------
// Activate Classes
// ----------------------------------------------------------------

// Default values for ScrollTrigger
ScrollTrigger.defaults({
  start: "top 20%",
  end: "bottom 20%",
  // markers: true
})

// Main sections --> deactivated
// ScrollTrigger.create({
//   trigger: '.intro__section',
//   endTrigger: '.focus__section',
//   toggleClass: { targets: '.nav__title--1', className: 'active' },
// })
// ScrollTrigger.create({
//   trigger: '.solutions__section',
//   // endTrigger: '.focus__section',
//   toggleClass: { targets: '.nav__title--2', className: 'active' },
// })

// AWS Section
ScrollTrigger.create({
  trigger: '.section2__section',
  toggleClass: { targets: '.nav__item--1', className: 'active' },
})
ScrollTrigger.create({
  trigger: '.section4__section',
  toggleClass: { targets: '.nav__item--2', className: 'active' },
})
ScrollTrigger.create({
  trigger: '.section6__section',
  toggleClass: { targets: '.nav__item--3', className: 'active' },
})

// Solutions Sections
ScrollTrigger.create({
  trigger: '#solutions--start',
  endTrigger: '#solutions--1-1',
  end: 'top 20%',
  toggleClass: { targets: '.nav__item--5', className: 'active' },
  // markers: true
})
// ScrollTrigger.create({
//   trigger: '#solutions--2',
//   endTrigger: '#solutions--2-1',
//   end: 'top 20%',
//   toggleClass: { targets: '.nav__item--6', className: 'active' },
//   // markers: true
// })

// Solutions Sub-items
ScrollTrigger.create({
  trigger: '#solutions--1-1',
  endTrigger: '#solutions--1-2',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-1', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--1-2',
  endTrigger: '#solutions--1-3',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-2', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--1-3',
  endTrigger: '#solutions--2-4',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-3', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--2-4',
  endTrigger: '.contact__section',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-4', className: 'active' },
})
// ScrollTrigger.create({
//   trigger: '#solutions--2-1',
//   endTrigger: '#solutions--2-2',
//   end: 'top 20%',
//   toggleClass: { targets: '.nav__sub-item-5', className: 'active' },
// })
// ScrollTrigger.create({
//   trigger: '#solutions--2-2',
//   endTrigger: '#solutions--2-3',
//   end: 'top 20%',
//   toggleClass: { targets: '.nav__sub-item-6', className: 'active' },
// })
// ScrollTrigger.create({
//   trigger: '#solutions--2-3',
//   endTrigger: '#solutions--2-4',
//   end: 'top 20%',
//   toggleClass: { targets: '.nav__sub-item-7', className: 'active' },
// })
// ScrollTrigger.create({
//   trigger: '#solutions--2-4',
//   endTrigger: '.contact__section',
//   toggleClass: { targets: '.nav__sub-item-8', className: 'active' },
// })


// ----------------------------------------------------------------
// Responsive outlook
// ----------------------------------------------------------------

$(document).ready(() => {
  //  - reactivate preloader animation when done dev
  $('#preloader').delay(4500).fadeOut()
  $('body').delay(4500).css('opacity', '1')

  if ($('body').width() <= 1024) {
    var st = $(window).scrollTop();
    var lastScrollTop = 0;
    // console.log(st)
    var delta = 50;
    var didScroll;
    // var navbarHeight = $('.footer-phone').outerHeight();

    setInterval(function () {
      if (didScroll) {
        didScroll = false;
      }
    }, 250);

    $(window).scroll(function () {

      didScroll = true;
      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop) {
        // Scroll Down
        $(".sidebar-nav__container").addClass('up');
      } else {
        // Scroll Up
        $(".sidebar-nav__container").removeClass('up');

        if (st < 150) {
          $(".sidebar-nav__container").removeClass('up');
        }
      }

      lastScrollTop = st;

    });
  }
})

