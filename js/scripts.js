$(document).ready(function() {
  let age = parseInt(prompt("Please enter your age."));

  if (age >= 18) {
    $("#voter").show();
  } else {
    $("#under18").show();
  }

});