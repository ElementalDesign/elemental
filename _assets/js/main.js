// MAIN
$(function() {

var show_home = true;

var mql = window.matchMedia("(min-width: 360px)");
var handleMediaChange = function (mediaQueryList) {
  if (mediaQueryList.matches) {
        // Quote Cycle
    $('.quotes ul').cycle({
        fx:     'fade',
        speed:  2000,
        containerResize: false,
        slideResize: false,
        fit: 1,
        random:1,
        timeout: 8000
    });


        // Article
    $('.articles').cycle({
        fx:     'fade',
        speed:  'fast',
        containerResize: false,
        slideResize: false,
        fit: 1,
        timeout: 0,
        pager:  $(this).closest('header ul'),
        pagerAnchorBuilder: function(idx, slide) {
            // return selector string for existing anchor
            return $(slide).parent().parent().find('header ul li:eq('+idx+')');
        },
        onPagerEvent: function(idx, slide){
            var links = $(slide).parent().parent().find('header ul li');
            links.find('a').removeClass('active');
            links.eq(idx).find('a').addClass('active');
        }
    });

    if(!show_home){
        $('#home').removeClass('show');
    }
    console.log('we are NOT too skinny!');

  }
  else {
    $('.quotes ul').cycle('destroy');
    $('.quotes ul li').removeAttr("style");

    $('#about article, #services article, #process article').removeAttr("style");

    $('#home').addClass('show');

    console.log('we are too skinny!');
  }
}


mql.addListener(handleMediaChange);
handleMediaChange(mql);



    var article_links = $('.content header ul li a');

    $('.roots-dropdown').click(function(e){
        e.preventDefault();
        $('.roots-container').toggle();
    });

    // Primary Automatic Cycle
    $('#home').cycle({
        fx:     'fade',
        speed:  2000,
        containerResize: false,
        slideResize: false,
        fit: 1,
        random:1,
        timeout: 4000
    });


    // Article Photos
    $('aside').cycle({
        fx:     'fade',
        speed:  'fast',
        containerResize: false,
        slideResize: false,
        fit: 1,
        timeout: 0,
        pager:  $(this).closest('header ul'),
        pagerAnchorBuilder: function(idx, slide) {
            // return selector string for existing anchor
            return $(slide).parent().parent().find('header ul li:eq('+idx+')');
        },
    });


    $('.nav-block').click(function(e){
        e.preventDefault();

        var navBlock        = $(this).find('a'),
            contentBlock    = $(this).attr('rel'),
            selector        = $('#'+contentBlock),
            links           = selector.find('nav ul li');

        $('.nav-block a').removeClass('active');
        navBlock.addClass('active');

        show_home = false;
        $('.main section').removeClass('show');
        selector.addClass('show');

        $('.footer-container footer')
            .removeClass('about')
            .removeClass('process')
            .removeClass('services')
            .addClass(contentBlock);


        if(!links.find('a').hasClass('active')){
            links.find('a').removeClass('active');
            links.eq(0).find('a').addClass('active');
        }

    });

    $('.header-container .title a').click(function(e){
        e.preventDefault();

        show_home = true;

        $('.footer-container footer')
            .removeClass('about')
            .removeClass('process')
            .removeClass('services');

        $('.nav-block a').removeClass('active');

        $('.main section').removeClass('show');
        $('#home').addClass('show');
    });

});


