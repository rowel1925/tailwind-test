function toggleVisibility() {
    const button = document.querySelector('.mobile-menu.hidden');
    if (button.style.display === 'none') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none'; 
    }
  }
function toggleClose() {
    const close = document.querySelector('.mobile-menu.hidden');
    close.style.display = 'none';
  }