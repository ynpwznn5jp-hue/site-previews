(function () {
  // The estimate form is not connected to anything. Say so and point to the phone.
  var form = document.getElementById('estimate-form');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      note.hidden = false;
    });
  }

  // On phones, show the bottom call bar only after the hero's call button has scrolled out of view.
  var heroCall = document.getElementById('hero-call');
  var bar = document.getElementById('callbar');
  if (heroCall && bar && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var entry = entries[0];
      bar.hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
    }).observe(heroCall);
  }
})();
