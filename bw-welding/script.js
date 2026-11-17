// Preview only: the form is not connected to anything.
document.getElementById('quote-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent =
    "This form isn't connected yet. For now, call (512) 608-8377.";
});
