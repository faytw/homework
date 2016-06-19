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

    .on('click', '.mob-a li', function(e){
        event.preventDefault();
        $(this).find('.mob-b').slideToggle().end().addClass('b-on');
        $(this).children('a').find('.off').css('display','none')
                       .end().find('.on').show();
    })

    .on('click', '.b-on', function(){
        $(this).children('a').find('.off').css('display','inline')
                        .end().find('.on').css('display','none')
        $(this).removeClass("b-on");
    })


    .on('click', '.mob-b li', function(e){
        event.preventDefault();
        $(this).find('.mob-c').slideToggle();

    })

    .on('click', '#nav-btn', function(){
        $(this).toggleClass('open');
        if( $('#nav-btn').hasClass('open') ){
            $('.mob-nav').show();
        }else{
            $('.mob-nav').hide();
        }
    })

    .ready(function() {
         
    });


