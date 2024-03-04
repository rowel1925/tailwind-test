const actionToggle = document.querySelector('.mobile-menu.hidden');

window.addEventListener('resize', function() {
  if (window.innerWidth >= 769) {
    actionToggle.style.display = 'none';
  }
});

function toggleVisibility() {
    if (actionToggle.style.display === 'none') {
      actionToggle.style.display = 'block';
    } else {
      actionToggle.style.display = 'none'; 
    }
  }
function toggleClose() {
  actionToggle.style.display = 'none';
}