// SmallTown Pest & Termite preview: two small things, no network calls.
(function () {
  // 1. The message form is not connected. Say so instead of sending anything.
  var form = document.getElementById('message-form');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      note.hidden = false;
      note.focus();
    });
  }

  // 2. Mark today's row in the hours table (Monday = 1 ... Saturday = 6).
  var row = document.querySelector('.hours tr[data-day="' + new Date().getDay() + '"]');
  if (row) {
    row.classList.add('is-today');
    var label = document.createElement('span');
    label.className = 'today';
    label.textContent = ' (today)';
    row.querySelector('th').appendChild(label);
  }
})();
