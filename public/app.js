window.addEventListener('load', function () {

  //
  // Notify user when updates are ready
  //
  window.applicationCache.addEventListener('updateready', function () {
    if (window.confirm('New version ready, would you like to update now?')) {
      window.location.reload();
    }
  });

  //
  // Periodically check for a new version
  //
  window.setInterval(function () {
    window.applicationCache.update();
  }, 5 * 1000); // every 5 seconds

});
