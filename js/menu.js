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
        var $navHeight = $('.comNav').height();
        var $ulHeight = $('#' + $layer + '_' + $index_val).height();
        var space = $navHeight - $ulHeight;
        console.log(space);
        if (space < 40) {
            $('.comNav').height($navHeight + 40);
        }
    })
    .ready(function() {

    });