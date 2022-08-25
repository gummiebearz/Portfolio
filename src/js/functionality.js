$('.welcome .arrow-down').click(function () {
	$('.welcome')
		.stop(true)
		.fadeTo('fast', 0, function () {})

	$('html, body')
		.stop(true)
		.animate(
			{
				scrollTop: $('.story').offset().top
			},
			'slow'
		)
})

$('.story .arrow-down').click(function () {
	$('.welcome')
		.stop(true)
		.fadeTo('fast', 0, function () {})

	$('html, body')
		.stop(true)
		.animate(
			{
				scrollTop: $('.projects').offset().top
			},
			'slow'
		)
})

$(window).scroll(function () {
	if ($(this).scrollTop() <= 300) {
		$('.story')
			.stop(true)
			.fadeTo('fast', 0, function () {})
	} else {
		$('.story')
			.stop(true)
			.fadeTo('fast', 1, function () {})
	}
})
