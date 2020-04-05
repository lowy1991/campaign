function loadPicture() {
	var maxColumn	= 100;
	var maxRow		= 20;
	for (i = 1; i <=maxRow; i++) {
		$('#chart').append(`<div id="row-${i}"></div>`)
		for (j = 1; j <= maxColumn; j++) {
			$(`#row-${i}`).append(`<img src="static/img/row-${i}-col-${j}.jpg" class="tile" id="row-${i}-col-${j}"/>`);
			$(`#row-${i}-col-${j}`).css('filter', 'grayscale(100%)');
		}
	}
}

$(document).ready(function() {
	loadPicture();
});