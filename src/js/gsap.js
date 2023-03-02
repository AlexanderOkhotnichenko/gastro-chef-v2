import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.list-categories-item', {
  delay: 0.5,
  stagger: 0.15,
  duration: 1,
  y: 0,
  opacity: 1,
  ease: "back.out(1.7)"
});

gsap.to(CSSRulePlugin.getRule('.main__container::before'), {
  delay: 0.5,
  duration: 1,
  transform: "translateY(-50%) scale(1)",
  opacity: 1,
});

gsap.to('.benefits-item svg', {
  scrollTrigger: {
    trigger: '.benefits-section',
    start: 'top center',
    end: "bottom bottom",
  },
  duration: 0.8,
  clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
});

gsap.to('.benefits-item span', {
  scrollTrigger: {
    trigger: '.benefits-section',
    start: 'top center',
    end: "bottom bottom",
  },
  delay: 0.25,
  duration: 1,
  opacity: 1,
  y: 0,
  ease: "bounce.out",
});

gsap.to(CSSRulePlugin.getRule('.meal-programme-section::before'), {
  scrollTrigger: {
    trigger: '.benefits-section',
    start: '100 center',
    end: "bottom bottom",
  },
  duration: 1,
  transform: "scale(1)",
  opacity: 1,
});

gsap.to('.meal-toggle-button', {
  scrollTrigger: {
    trigger: '.meal-toggle-button-wrapper',
    start: 'top center',
    end: "bottom bottom"
  },
  duration: 1,
  opacity: 1,
  x: 0,
  ease: "power3.out",
});

gsap.to('.meal-categories-toggle', {
  scrollTrigger: {
    trigger: '.meal-categories-wrapper',
    start: 'top center',
    end: "bottom bottom"
  },
  stagger: 0.15,
  y: 0,
  opacity: 1
});

gsap.to('.meal-description-top-box', {
  scrollTrigger: {
    trigger: '.meal-wrapper',
    start: '50 center',
    end: "bottom bottom",
  },
  x: 0,
  opacity: 1
});

gsap.to('.meal-plan-days-wrapper', {
  scrollTrigger: {
    trigger: '.meal-wrapper',
    start: '50 center',
    end: "bottom bottom",
  },
  delay: 0.4,
  y: 0,
  opacity: 1
});

gsap.to('.meal-plan-wrapper-table', {
  scrollTrigger: {
    trigger: '.meal-wrapper',
    start: '50 center',
    end: "bottom bottom",
  },
  delay: 0.8,
  y: 0,
  opacity: 1
});

gsap.to('.meal-description-center-table', {
  scrollTrigger: {
    trigger: '.meal-wrapper',
    start: '50 center',
    end: "bottom bottom",
  },
  delay: 1.2,
  x: 0,
  opacity: 1
});

gsap.to('.meal-description-bottom-button', {
  scrollTrigger: {
    trigger: '.meal-wrapper',
    start: '50 center',
    end: "bottom bottom",
  },
  delay: 1.6,
  y: 0,
  transform: "scale(1)",
  opacity: 1,
  duration: 0.1,
  ease: "power4.out"
});

gsap.to('.slider-gallery-title', {
  scrollTrigger: {
    trigger: '.slider-gallery-section__content',
    start: '100 center',
    end: "bottom bottom",
  },
  opacity: 1,
  y: 0,
  duration: 0.2,
});

gsap.to(CSSRulePlugin.getRule('.slider-gallery-section::before'), {
  scrollTrigger: {
    trigger: '.slider-gallery-section__content',
    start: '100 center',
    end: "bottom bottom",
  },
  duration: 1,
  transform: "scale(1)",
  opacity: 1,
});

gsap.to(CSSRulePlugin.getRule('.slider-gallery-section::after'), {
  scrollTrigger: {
    trigger: '.slider-gallery-section__content',
    start: 'bottom center',
    end: "bottom bottom",
  },
  duration: 1,
  transform: "scale(1)",
  opacity: 1,
});

gsap.to(CSSRulePlugin.getRule('.form-questions-section::before'), {
  scrollTrigger: {
    trigger: '.form-questions-section',
    start: '100 center',
    end: "bottom bottom",
  },
  duration: 1,
  transform: "scale(1)",
  opacity: 1,
});

gsap.to('.form-callback-wrapper > *', {
  scrollTrigger: {
    trigger: '.form-questions-section',
    start: '100 center',
    end: "bottom bottom",
  },
  stagger: 0.2,
  opacity: 1,
  y: 0,
  duration: 1
});

gsap.to('.question-wrapper > *', {
  scrollTrigger: {
    trigger: '.form-questions-section',
    start: '100 center',
    end: "bottom bottom",
  },
  stagger: 0.15,
  opacity: 1,
  x: 0,
  duration: 0.5
});

export const addAnimationModal = () => {
  let timelineOpenModal = gsap.timeline();
  timelineOpenModal.to('.slider-gallery-track', {
    animationPlayState: 'paused',
  }, '>-0.5').to('.modal', {
    visibility: 'visible',
    duration: 0.4
  }).to('.modal-overlay', {
    backgroundColor: 'rgba(86, 86, 86, 0.6)',
    duration: 0.4
  }).to('.modal-content', {
    delay: 0.15,
    transform: 'none',
    opacity: 1,
    visibility: 'visible',
    duration: 0.4
  })
};

export const deleteAnimationModal = () => {
  let timelineOpenModal2 = gsap.timeline();

  timelineOpenModal2.to('.modal-content', {
    transform: 'scale(.85)',
    opacity: 0,
    duration: 0.4
  }).to('.modal-overlay', {
    backgroundColor: 'rgba(86, 86, 86, 0)',
    duration: 0.4
  }).to('.modal', {
    visibility: 'hidden',
    duration: 0.4
  }).to('.slider-gallery-track', {
    animationPlayState: 'running',
  }, '>-0.5').to('.modal-content', {
    visibility: 'hidden',
  });
}