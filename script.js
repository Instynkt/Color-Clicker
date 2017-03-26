$(document).ready(function() { 
	var count = parseInt($('#clock').html());
	var score = 0;
	function newTile (tile) {
		function multiplier () {
			if (score <= 28) {
				return 3 - (score / 44);
			} else {
				return 2.3;
			}
		}
		var x = Math.floor(Math.random() * multiplier());
    	if (x == 0) {
    		$(tile).removeClass('blue').removeClass('yellow').addClass('red');
    	} else if (x == 1) {
    		$(tile).removeClass('blue').removeClass('red').addClass('yellow');
    	} else if (x == 2) {
    		$(tile).removeClass('red').removeClass('yellow').addClass('blue');
    	}
    	//$(asdf2).html(x);
	}

	function checkIfAlive () {
		if (count > 0) {
	      count = (count - 1);
	      $('#clock').html(count);
	    } else {
	      clearInterval(timer);
	      $('#clock').html("Time's Up");
	    }
	}
	
	var timer = setInterval(function() {

		checkIfAlive();
	    for (var i = 0; i < 9; i++) {
	    	var asdf = i;
	    	var asdfg = '#';
	    	var asdf2 = asdfg.concat(asdf, "");
	    	newTile(asdf2);
    	}
    	score++;
    	$('#score').html(score);
  	}, 500);
  	$('div').click(function () {
  		var color = $(this);
  		if (color.hasClass('red')) {
  			count -= 10;
  		} else if (color.hasClass('yellow')) {
  			count -= 3;
  		} else if (color.hasClass('blue')) {
  			count += 20;
  		}
  		newTile(color);
  		checkIfAlive();
  	});
});
