$(document).ready(function() { 
	var count = parseInt($('#clock').html());
	var score = 0;
	var ended = false;
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
	    	ended = true;
		    clearInterval(timer);
		    clearInterval(otherTimer);
		    clearInterval(tileSetter);
		    $('#clock').html("Time's Up");
	    }
	}

	function newTiles () {
		checkIfAlive();
	    if (!ended) {
	    	for (var i = 0; i < 9; i++) {
		    	var asdf = i;
		    	var asdfg = '#';
		    	var asdf2 = asdfg.concat(asdf, "");
		    	newTile(asdf2);
    		}
    	}
	}
	var speed = 1000;
	var tileSetter = setInterval(function () {
		newTiles();
	}, speed);
	var timer = setInterval(function() {
		speed *= 0.98;
		clearInterval(tileSetter);
		tileSetter = setInterval(function () {
			newTiles();
		}, speed);
  	}, 1800);
  	$('div').click(function () {
  		var color = $(this);
  		if (color.hasClass('red')) {
  			count -= 6;
  		} else if (color.hasClass('yellow')) {
  			count -= 1;
  		} else if (color.hasClass('blue')) {
  			count += 6;
  		}
  		newTile(color);
  		checkIfAlive();
  	});
  	var otherTimer = setInterval(function() {
  		score++;
  		$('#score').html(score);
  	}, 1000);
});
