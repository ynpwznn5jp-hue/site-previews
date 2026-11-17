// The preview form sends nothing. It only shows a note.
document.getElementById('quote-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent =
    'This form isn’t connected yet. For now, call (210) 394-8433.';
});
