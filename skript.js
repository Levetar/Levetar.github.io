$('#name, #post').on('click', function () {
	$(this).toggleClass('_active');
})

$(window).keypress(function(e) {
    if (e.which === 32) {
    	$('#name, #post').remove();
    }
});