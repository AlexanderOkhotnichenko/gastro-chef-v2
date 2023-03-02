export function toggleButtonMeatProgramm() {
  const section = document.querySelector('.meal-toggle-button-wrapper');

  section.addEventListener('click', (event) => {
    const target = event.target;
    const activeEl = document.querySelector('.meal-toggle-button.active');

    if (target.classList.contains('meal-toggle-button-wrapper')) return;

    activeEl.classList.remove('active');
    target.classList.add('active');
  });
}