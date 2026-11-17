// Preview only: the form sends nothing anywhere.
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-note').textContent =
    'This form isn’t connected yet. For now, call (254) 535-9768.';
});
