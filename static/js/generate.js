var hoursCompleted	= 5500; 
var maxColumn		= 20;
var maxRow			= 100;

function update() {
	var rate			= 10;
	var tilesCompleted	= hoursCompleted/rate;
	$('#hours').text(hoursCompleted);
	for (i = 1; i <=maxRow; i++) {
		for (j = 1; j <= maxColumn; j++) {
			if (tilesCompleted > 0) {
				$(`#row-${i}-col-${j}`).css('filter', 'grayscale(0%)');
				$(`#row-${i}-col-${j}`).css('opacity', '1.0');
				tilesCompleted--;
			}
		}
	}
}

function loadPicture() {
	for (i = 1; i <=maxRow; i++) {
		$('#chart').append(`<div class="picture" id="row-${i}"></div>`)
		for (j = 1; j <= maxColumn; j++) {
			$(`#row-${i}`).append(`<img src="static/img/row-${i}-col-${j}.jpg" class="tile" id="row-${i}-col-${j}"/>`);
			$(`#row-${i}-col-${j}`).css('filter', 'grayscale(100%)');
			$(`#row-${i}-col-${j}`).css('opacity', '0.1');
		}
	}
}

$(document).ready(function() {
	loadPicture();
	update();
});