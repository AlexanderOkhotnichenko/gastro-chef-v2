export function toggleChat() {
  const chat = document.querySelector('.box-chat');
  
  chat.addEventListener("click", function (event) {
    event.preventDefault();
    const current = event.target;
    const parentEl = this.parentElement;

    parentEl.classList.toggle('active');
    current.classList.contains('chat-icon') && parentEl.classList.add('active');
    current.classList.contains('chat-text') && parentEl.classList.add('active');
  });
}