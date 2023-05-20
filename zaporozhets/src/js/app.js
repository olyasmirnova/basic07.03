$( document ).ready(function() {

    $('.tabs__link').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');
    
        $('.tabs__link').removeClass('active');
        $('.tabs__content').removeClass('active');
    
        $(this).addClass('active');
        $(tab_id).addClass('active');
    })
    
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.slider').slick({
        arrows: false,
        dots: true
    });
    
    $('.header__list-item').click(function() {
        $('.header__list-item').removeClass('active');
        $(this).addClass('active');
      });

});




    /* //nav btn
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
    })

    $('.gallery').slick({
        arrows: false,
        dots: true
    }); */
