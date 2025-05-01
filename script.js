document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll('.message');
    let currentIndex = 0;
  
    function showMessage(index) {
      messages.forEach((msg, i) => {
        msg.classList.toggle('active', i === index);
      });
    }
  
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0 && currentIndex < messages.length - 1) {
        currentIndex++;
        showMessage(currentIndex);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
        showMessage(currentIndex);
      }
    });
  
    // Show the first message
    showMessage(currentIndex);
  });