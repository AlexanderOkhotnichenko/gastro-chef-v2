export function toggleHeader() {
  const header = document.querySelector('header');
  const button = document.querySelector('.toggle-button');

  button.addEventListener('click', function() {
    this.classList.toggle('active');
    header.classList.toggle('active');
  });
}