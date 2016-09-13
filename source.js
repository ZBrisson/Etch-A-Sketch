var $div = $("<div class='canvas'></div>");
var x = "";
var y = "";

$(document).ready(function() {
	for(x = 0; x < 16; x++) {
  	for (y = 0; y < 16; y++) {
  		$('#container').append($div.clone());
  	}
  }
  
  $('.canvas').mouseover(function() {
  	$(this).css("background-color", "black");
  })
  
	$('.canvas').click(function() {
  	$('.canvas').css("background-color", "clear");
  })

})
