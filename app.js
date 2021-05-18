// Homepage animations
let tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

tl.from('.hero-img', { height: '0vh', duration: 1 })
  .fromTo('.hero-img', { width: '100%' }, { width: '60%', duration: 1.2 })
  .from('#slider', { x: '-100%', duration: 1.2 }, '<')
  .from('.hero-title', { x: '-20%', autoAlpha: 0, duration: 1 }, '-=1')
  .from('.home .action-btn', { x: '20%', autoAlpha: 0, duration: 1 }, '<')
  .from('nav', { y: '-20%', autoAlpha: 0, duration: 1 }, '<');

// Scroll animations
const makeTimeline = (elem) => {
  return gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      end: '+=300',
      scrub: 1,
      once: true,
    },
  });
};

let aboutTL = makeTimeline('.about-container');
aboutTL
  .from('.about-title', { y: '-20%', autoAlpha: 0 })
  .from('.about-description', { scale: 0.9, x: '-20%', autoAlpha: 0 })
  .from('.about-img', { scale: 0.9, x: '20%', autoAlpha: 0 }, '<');

let artistsTL = makeTimeline('.artists-container');
artistsTL
  .from('.artists-title', { scale: 0.9, autoAlpha: 0 })
  .from('.artist h4', { y: '-70%', autoAlpha: 0 }, '>-0.5');

let bookingsTL = makeTimeline('#bookings');
bookingsTL
  .from('.bookings-img img', { width: '0%', autoAlpha: 0 })
  .from('.bookings-content', { x: '20%', autoAlpha: 0 }, '<');

let contactTL = makeTimeline('#contact');
contactTL
  .from('.contact-title', { y: '-20%', autoAlpha: 0 })
  .from('.contact-form', { autoAlpha: 0 });
