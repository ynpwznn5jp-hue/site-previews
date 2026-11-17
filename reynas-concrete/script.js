// Preview only: the form is not connected to anything.
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-msg").innerHTML =
    'This form isn’t connected yet. For now, call <a href="tel:+18305697838">(830)&nbsp;569&#8209;7838</a>.';
});
