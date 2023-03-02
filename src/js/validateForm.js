import Swal from 'sweetalert2';

export function validateForm() {
  const form = document.querySelector('.form-callback');
  const checkbox = form.querySelectorAll('.form-callback-input-checkbox-label');

  form.addEventListener("submit", formSend);

  async function formSend(event) {
    event.preventDefault();

    let error = validForm(form);

    if (error == 0) {
      form.reset();
      checkbox.forEach((input) => input.classList.remove('checked'));
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    }
  }

  const validForm = () => {
    let error = 0;
    const list = document.querySelectorAll('.form-callback-input-input');
    
    list.forEach((input) => {
      const parent = input.closest('.form-callback-input-wrapper');
      
      if (!input.value.length) {
        parent.classList.add('error');
        error++;
      } else {
        parent.classList.remove('error');
      }
    });

    return error
  }
}