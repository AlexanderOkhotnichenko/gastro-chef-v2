export function toggleAcardion() {
  const list = document.querySelectorAll('.question-content-wrapper');
  
  list.forEach((item) => {
    item.addEventListener("click", (event) => {
      const currentTarget = event.target;
      const parent = currentTarget.closest('.question-content-wrapper');
      const activeEl = document.querySelector('.question-content-wrapper.open');

      activeEl && activeEl.classList.remove('open');
      parent.classList.toggle('open');
      activeEl === parent && parent.classList.remove('open');
    });
  });

  
}