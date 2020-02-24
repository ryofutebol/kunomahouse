$(function(){
    $('a[href^="#"]').click(function(){
      var headerHight = 80;
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });

    window.sr = ScrollReveal();
    sr.reveal('.top-wrapper',{easing: 'ease', duration: 3000, opacity: 0, scale: 1})

    window.sr = ScrollReveal();
    sr.reveal('.content',{easing: 'ease', duration: 3000, opacity: 0, delay: 1})


    window.sr = ScrollReveal({duration: 1500, easing: 'ease-in-out', scale: 1});
    sr.reveal('.info')
    sr.reveal('.room')
    sr.reveal('.price-container')
    sr.reveal('.aboutroom')
    sr.reveal('.container')
    sr.reveal('.access')
    sr.reveal('.access-container')
    sr.reveal('.reserve')

  
    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

     
        $(document).ready(function() {
            $('.drawer').drawer({
            iscroll: {
                scrollX: false,
                scrollY: true,
                click:true, // これと
                mouseWheel: true,
                disablePointer: true, // これがポイント（っぽい）
                disableTouch: false,
                disableMouse: false
            },
            });
        });
  });