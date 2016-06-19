$(document)
.on('click', 'input[type="radio"]:checked', function() {
	var count = 0;
	$.each($('input[type="radio"]:checked'), function(index, val) {
		count += parseInt($(this).val());
	});

	$('#myscore').text(count);
});


