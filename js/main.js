window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
    playBtn.addEventListener('click' , function() {
        video.play();
        video.setAttribute('controls' ,'controls' );
        playBtn.style.display = "none";
    });
    video.addEventListener('ended' , function() {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls');
    })     
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs__item_active")) {
                    otherItem.classList.remove("tabs__item_active");
                }
            })
            elem.classList.add("tabs__item_active")
        });
    });  
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 500,
        prevArrow: '<div class="carousel__arrow carousel__prev"><i class="fas fa-arrow-left"></i></div>',
        nextArrow: '<div class="carousel__arrow carousel__next"><i class="fas fa-arrow-right"></i></div>'
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryForBtn').on('click', popupOpen);
    $('.popup__close').on('click',() => {
        $('.popup').removeClass('popup__active '); 
        $('body').css('overflow', 'visible')
    });
    function popupOpen() {
        $('.popup').addClass('popup__active '); 
        $('body').css('overflow', 'hidden')
    }
    $("a[href*='#']").on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});