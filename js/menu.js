$(document)
    .on('mouseenter', '.com li', function() {
        var $this = $(this);
        var $layer = $this.parent().attr('id');
        var $index_val = $('#' + $layer + ' li').index($this);
        var $items = $layer.split('_');
        var $ulLevel = '';
        var $ulLevel_container = [];
        var selector_elements = '';

        $.each($items, function(index, value) {
            if ($ulLevel.length === 0) {
                $ulLevel += value;
            } else {
                $ulLevel += '_' + value;
            }
            $ulLevel_container.push('#' + $ulLevel);
            $ulLevel_container.push('#' + $layer + '_' + $index_val);
        });
        selector_elements = $ulLevel_container.toString();
        var $ele = $(selector_elements);
        $ele.show().removeClass('hide');
        $('ul').not($ele).not($('#' + $ulLevel)).hide();
    })
    .on('mouseenter', '.com li', function() {
        var $this = $(this);
        var $layer = $this.parent().attr('id');
        var $index_val = $('#' + $layer + ' li').index($this);
        var $navHeight = $('.com-nav').height();
        var $ulHeight = $('#' + $layer + '_' + $index_val).height();
        var space = $navHeight - $ulHeight;
        if (space < 40) {
            $('.com-nav').height($navHeight + 40);
        }
    })


// 手機版
    .on('click', '.mob-nav li a', function() {
        event.preventDefault();
        var $this = $(this);
        var $ul = $this.siblings('ul');
        if ($ul.length > 0) {
            var $span = $this.find('span');
            if ($span.text() === '+') {
                var $symbol = '-';
            } else {
                var $symbol = '+';
            }
            $span.text($symbol);
            $this.siblings('ul').slideToggle();
        }
    })

    .on('click', '#nav-btn', function() {
        $(this).toggleClass('open');
        if ($('#nav-btn').hasClass('open')) {
            $('.mob-nav').show();
        } else {
            $('.mob-nav').hide();
        }
    })

    .ready(function() {

    });
