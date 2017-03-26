$(document).ready(function() { 
	var count = parseInt($('#clock').html());
	function newTile (tile) {
		var x = Math.floor(Math.random() * 3);
    	if (x == 0) {
    		$(tile).removeClass('blue').removeClass('yellow').addClass('red');
    	} else if (x == 1) {
    		$(tile).removeClass('yellow').removeClass('red').addClass('blue');
    	} else if (x == 2) {
    		$(tile).removeClass('red').removeClass('blue').addClass('yellow');
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

		var time = 0;
	    //count = parseInt($('#clock').html());
	    if (count > 0) {
	      count = (count - 1);
	      $('#clock').html(count);
	    } else {
	      clearInterval(timer);
	      $('#clock').html("Time's Up");
	    }
	    for (var i = 0; i < 9; i++) {
	    	var asdf = i;
	    	var asdfg = '#';
	    	var asdf2 = asdfg.concat(asdf, "");
	    	newTile(asdf2);
    	}
  	}, 1000);
  	$('div').click(function () {
  		var color = $(this);
  		if (color.hasClass('red')) {
  			count -= 10;
  		} else if (color.hasClass('yellow')) {
  			count += 3;
  		} else if (color.hasClass('blue')) {
  			score += 10;
  			updateScore();
  		}
  		newTile(color);
  		checkIfAlive();
  	});
});
