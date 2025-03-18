// Mobile menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileSearch = document.getElementById('mobile-search');

hamburgerBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('hidden');
});
