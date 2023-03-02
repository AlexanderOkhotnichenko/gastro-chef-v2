import '../scss/main.scss';
import '../index.html';
import './gsap';
import { toggleHeader } from "./toggleHeader";
import { toggleCategories } from './toggleCategories';
import { toggleChat } from './toggleChat';
import { swiper } from './swiper';
import { toggleButtonMeatProgramm } from './toggleButtonMeatProgramm';
import { toggleAcardion } from './toggleAcardion';
import { validateForm } from './validateForm';
import { toggleCheckbox } from './toggleCheckbox';
import { toggleProgramm } from './toggleProgramm';
import { modal } from './modal';

document.addEventListener("DOMContentLoaded", function () {
  toggleHeader();
  toggleCategories();
  toggleChat();
  swiper();
  toggleButtonMeatProgramm();
  toggleAcardion();
  validateForm();
  toggleCheckbox();
  toggleProgramm();
  modal();
});