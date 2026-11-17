var form = document.getElementById('quote-form');
var msg = document.getElementById('form-msg');
if (form && msg) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.hidden = false;
  });
}
