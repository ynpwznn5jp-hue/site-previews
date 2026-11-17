// Preview only: the form sends nothing anywhere.
document.getElementById('ask').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('form-msg');
  msg.hidden = false;
  msg.focus && msg.setAttribute('tabindex', '-1');
  msg.focus();
});
