$(document)
    .on('mouseenter', '.com li', function() {
        var $this = $(this);
        var $layer = $this.parent().attr('id');
        var index = $('#' + $layer + ' li').index($this);
        var $ele = $('#' + $layer + '_' + index);
        $ele.css('background-color', 'red');
        $('ul').not($ele).not($('#' + $layer)).css('background-color', 'blue');
    })
    .on('mouseenter', '', function() {
        var $navHeight = $('.comNav').height();
        var $ulHeight = $(this).height();
        var space = $navHeight - $ulHeight;
        if (space < 40) {
            $('.comNav').height($navHeight + 40);
        }
    })
    .ready(function() {

    });