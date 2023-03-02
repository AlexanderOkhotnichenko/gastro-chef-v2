export function toggleCategories() {
  const list = document.querySelectorAll('.list-categories-item');

  list.forEach((el) => {
    el.addEventListener("click", function() {
      const activeEl = document.querySelector('.list-categories-item.active');
      this.classList.add('active');
      activeEl && activeEl.classList.remove('active');
    });
  });
}