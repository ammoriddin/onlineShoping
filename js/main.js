$(function () {
    $('.banner-section-slider').slick({
        dots: true,
        prevArrow: `<button class="banner-section-slider-btn banner-section-slider-btnprev"> <img src="./images/prev.svg" alt="prev"></button>`,
        nextArrow: `<button class="banner-section-slider-btn banner-section-slider-btnnext"> <img src="./images/next.svg" alt="prev"></button>`,
    });

    $('.search-tabs-item').on('click',function () {

        $('.search-tabs-item').removeClass('active')
        $('.search-content-item').removeClass('content-active')

        $(this).addClass('active')
        $($(this).attr('href')).addClass('content-active')  
    })
})