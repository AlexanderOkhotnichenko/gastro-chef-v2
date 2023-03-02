  export function toggleCheckbox() {
  const list = document.querySelectorAll('.form-callback-input-checkbox-label input');
  
  list.forEach((input) => {
    input.addEventListener("click", function() {
      const parent = this.closest('.form-callback-input-checkbox-label');
      parent.classList.toggle('checked');
    });
  });
}