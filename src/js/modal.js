import { addAnimationModal, deleteAnimationModal } from "./gsap";

export const modal = () => {

  function bindModal(buttonTrigger, modalSection, closeSection, contentImage) {
    const btnTrigger = document.querySelectorAll(buttonTrigger);
    const modal = document.querySelector(modalSection);
    const close = document.querySelectorAll(closeSection);
    const image = document.querySelector(contentImage);

    btnTrigger.forEach((trigger) => {

      trigger.addEventListener('click', event => {
        event.preventDefault();
        const src = event.target.src;
        image.src = src;
        modal.classList.add('open');
        if (modal.classList.contains('open')) {
          addAnimationModal();
          document.body.classList.add('delete-scroll');
        }
      });
    });

    close.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        if (event.target.closest('.modal-content')) return
        modal.classList.remove('open');
        if (!modal.classList.contains('open')) {
          deleteAnimationModal();
          document.body.classList.remove('delete-scroll');
        }
      })
    });
  }
  bindModal('.modal-trigger', '.modal', '.close-modal', '.modal-content img');
}