$(document).ready(function() { 
	
	var timer = setInterval(function() {

		var time = 0;
	    var count = parseInt($('#clock').html());
	    if (count !== 0) {
	      $('#clock').html(count - 1);
	    } else {
	      clearInterval(timer);
	      $('#clock').html("Time's Up");
	    }
	    for (var i = 0; i < 9; i++) {
	    	var x = Math.floor(Math.random() * 3);
	    	var asdf = i;
	    	var asdfg = '#';
	    	var asdf2 = asdfg.concat(asdf, "");
    		if (x == 0) {
    			$(asdf2).removeClass('blue').removeClass('yellow').addClass('red');
    		}
    		else if (x == 1) {
    			$(asdf2).removeClass('yellow').removeClass('red').addClass('blue');
    		}
    		else if (x == 2)
    		{
    			$(asdf2).removeClass('red').removeClass('blue').addClass('yellow');
    		}
    		 $(asdf2).html(x);
    	}
  	}, 1000);
});
