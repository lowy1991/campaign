var hoursCompleted	= 200000; 
var maxColumn		= 200;
var maxRow			= 1000;

function loadPicture() {
	var rate			= 10;
	var tilesCompleted	= Math.floor(hoursCompleted/rate);
	$('#hours').text(hoursCompleted);
	rowloop:
	for (i = 1; i <=maxRow; i++) {
		$('#chart').append(`<div class="picture" id="row-${i}"></div>`)
		for (j = 1; j <= maxColumn; j++) {
			if (tilesCompleted > 0) {
				$(`#row-${i}`).append(`<img src="static/img/row-${i}-col-${j}.jpg" class="tile" id="row-${i}-col-${j}"/>`);
				$(`#row-${i}-col-${j}`).css('opacity', '0.75');
				tilesCompleted--;
			}
			else {
				break rowloop;
			}
		}
	}
}

$(document).ready(function() {
	loadPicture();
});