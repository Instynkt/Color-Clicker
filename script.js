function level1 () {
	var count = parseInt($('#clock').html());
	var score = 0;
	var ended = false;
	var dropSpeed = 1;
	var clickTime;
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
	}

	function checkIfAlive () {
		if (count > 0) {
	      count -= dropSpeed;
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
	    	for (var i = 0; i < 11; i++) {
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
  	var otherTimer = setInterval(function() {
  		score++;
  		$('#score').html(score);
  	}, 1000);
  	var keys = [['q', 0], ['w', 1], ['e', 2], ['r', 3],
  	['a', 4], ['s', 5], ['d', 6], ['f', 7],
  	['z', 8], ['x', 9], ['c', 10]];
  	$(document).keypress(function(event){
		if (!ended) {
			var typed = String.fromCharCode(event.which); 
			for (var i = 0; i < keys.length; i++) {
				if (typed == keys[i][0]) {
					var asdff = keys[i][1];
					var asdff2 = "#";
					var color = $(asdff2.concat(asdff, ""));
					if (color.hasClass('red')) {
			  			count -= 6;
			  		} else if (color.hasClass('yellow')) {
			  			count -= 1;
			  		} else if (color.hasClass('blue')) {
			  			count += 6;
			  		}
			  		newTile(color);
			  		checkIfAlive();
			  		clearTimeout(clickTime);
			  		dropSpeed = 1;
			  		clickTime = setTimeout(function () {
			  			dropSpeed *= 3;
			  		}, 2000);
				}
			}
		}
	});
}
