$(document).ready(function() { 
	$('div').addClass('red');
	var timer = setInterval(function() {

    var count = parseInt($('#clock').html());
    if (count !== 0) {
      $('#clock').html(count - 1);
    } else {
      clearInterval(timer);
      $('#clock').html("Time's Up");
    }
  }, 1000);
	$('div').removeClass('red');
});
