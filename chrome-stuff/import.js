// elm-import.js
document.addEventListener('DOMContentLoaded', function() {
  var elmDiv = document.getElementById('elm-container');
  var elmApp = Elm.Main.embed(elmDiv);
});