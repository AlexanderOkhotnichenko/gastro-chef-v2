import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

export function swiper() {
  const swiperEl = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    spaceBetween: 30,
    loop: true,
    speed: 500,
    effect: 'fade',
    navigation: {
      nextEl: ".slider-custom-button-next",
      prevEl: ".slider-custom-button-prev",
    },
    pagination: {
      el: ".slider-custom-pagination",
      clickable: true,
    }
  });
}
