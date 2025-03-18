// Mobile menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileSearch = document.getElementById('mobile-search');

hamburgerBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('hidden');
});

document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("signupModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("signupModal").classList.add("hidden");
});

// Vérification des mots de passe
document.getElementById("signupForm").addEventListener("submit", function(event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMsg = document.getElementById("passwordError");

  if (password !== confirmPassword) {
      errorMsg.classList.remove("hidden");
      event.preventDefault(); // Empêche l'envoi du formulaire
  } else {
      errorMsg.classList.add("hidden");
  }
});
