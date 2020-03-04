$(() => {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
    let tl1p1 = new TimelineMax()
    tl1p2 = new TimelineMax()
    tl2p1 = new TimelineMax()
    tl2p2 = new TimelineMax()
    tl3p1 = new TimelineMax()
    tl3p2 = new TimelineMax()
    tl4p1 = new TimelineMax()
    tl4p2 = new TimelineMax()
    const controller = new ScrollMagic.Controller();
    tl1p1
        .fromTo('.layout__grid', 1, {top:-2000}, {top:0}, 0.2)
        .staggerFromTo('.header', .8, {opacity: 0}, {opacity:1}, 0.3)
        // .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
        .staggerFromTo('.banner__ttl', 1.2, {x:-30,opacity:0}, {x:0,opacity:1}, 0.6)
        // .staggerFromTo('.banner__subttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.2)
        .staggerFromTo('.banner__image-wrp', .8, {x:30,opacity:0}, {x:0,opacity:1}, 1)
        .staggerFromTo('.banner__left', .8, {y:30,opacity:0}, {y:0,opacity:1}, 1)
        .staggerFromTo('.banner__center', .8, {y:30,opacity:0}, {y:0,opacity:1}, 1)
    // .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)
    tl1p2
        .fromTo('.stack__ttl', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
        .staggerFromTo('.stack__subttl', .5, {y:30,opacity:0}, {y:0,opacity:1}, "-=0.7")
        .staggerFromTo('.stack__img-wrp', .5, {x:-50,opacity:0}, {x:0,opacity:1}, .5)
        .staggerFromTo('.stack__item', .5, {y:-50,opacity:0}, {y:0,opacity:1}, .5)
    tl2p1
        .fromTo('.trust__ttl', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
        .staggerFromTo('.trust__subttl', .5, {y:30,opacity:0}, {y:0,opacity:1}, "-=0.7")
        .staggerFromTo('.trust__item', .3, {y:-50,opacity:0}, {y:0,opacity:1}, .2)
    tl2p2
        .fromTo('.test__ttl', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
        .staggerFromTo('.test__item', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)
    tl3p1
        .fromTo('.case__ttl', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
        .staggerFromTo('.case__item', .8, {rotationY:-40,x:-10,opacity:0}, {rotationY:0,x:0,opacity:1}, .5)
    tl3p2
        .fromTo('.feed__ttl', .5, {x:-30,opacity:0}, {opacity:1,x:0}, .5)
        .staggerFromTo('.feed__img-wrp', .8, {x:-30,opacity:0}, {opacity:1,x:0}, 1)
        .staggerFromTo('.feed__form', .8, {x:-30,opacity:0}, {opacity:1,x:0}, .1)
        .staggerFromTo('.feed__btn', .5, {y:-5,opacity:0}, {y:0,opacity:1}, 3)
    tl4p1
        .fromTo('.team__ttl', .5, {x:30,opacity:0}, {opacity:1,x:0}, .5)
        .fromTo('.team__overlay', .8, {opacity:1}, {opacity:.9}, .9)
        .staggerFromTo('.team__subttl', .5, {y:30,opacity:0}, {y:0,opacity:1}, "-=0.7")
        .staggerFromTo('.team__item', .2, {y:-20,opacity:0}, {y:0,opacity:1}, .2)
    tl4p2
        .fromTo('.footer__ttl', .5, {x:-30,opacity:0}, {opacity:1,x:0}, .5)
        .staggerFromTo('.footer__item', .5, {x:30,opacity:0}, {x:0,opacity:1}, .3)
        .fromTo('.footer__logo', .8, {scale:0,opacity:1}, {scale:1,opacity:1}, 2)
    const scene1p1 = new ScrollMagic.Scene({
      triggerElement: ".header",
      triggerHook: 0,
      // reverse: false,
    })
        .setTween(tl1p1)
        .addTo(controller);
    const scene1p2 = new ScrollMagic.Scene({
      triggerElement: ".stack",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl1p2)
        .addTo(controller);
    const scene2p1 = new ScrollMagic.Scene({
      triggerElement: ".trust",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl2p1)
        .addTo(controller);
    const scene2p2 = new ScrollMagic.Scene({
      triggerElement: ".test",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl2p2)
        .addTo(controller);
    const scene3p1 = new ScrollMagic.Scene({
      triggerElement: ".case",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl3p1)
        .addTo(controller);
    const scene3p2 = new ScrollMagic.Scene({
      triggerElement: ".feed",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl3p2)
        .addTo(controller);
    const scene4p1 = new ScrollMagic.Scene({
      triggerElement: ".team",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl4p1)
        .addTo(controller);
    const scene4p2 = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: 0.6,
      // reverse: false,
    })
        .setTween(tl4p2)
        .addTo(controller);
  });
});
$(() => {

});
$(() => {
  $('.header__hmb').on('click', function headerHambClick () {
    $('.layout')
      .toggleClass('menu-open')
      .removeClass('feed-open');
  });
  $('.js-popup__open').on('click', function popupBtnClick () {
    $('.layout').addClass('feed-open').removeClass('menu-open');
  });
  $('.js-popup__close').on('click', function popupCloseBtnClick () {
    $('.layout').removeClass('feed-open');
  });
  $('.js-menu__close').on('click', function popupCloseBtnClick () {
    $('.layout').removeClass('menu-open');
  });
  $('.js-layout__overlay').on('click', function popupOverlayClick () {
    $('.layout').removeClass('feed-open');
  });

  $('.header__nav-link').on('click', function headerNavLinkClick (event) {
    event.preventDefault();
    $('.layout').removeClass('menu-open');
    const id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 900);
  });
});
// $(() => {
    //Закрываем AjaxForm popup после успешной отправки
    // $(document).on('af_complete', function(event,res) {
    //   if(res.success) parent.$.fancybox.close();
    // });
// });
$(() => {
  $( ".js-feed__form-slider" ).slider({
    value: 600000,
    range: "max",
    min: 60000,
    max: 1000000,
    step: 10000,
    slide: function(event, ui) {
      $('.feed__form-slider-val').text(ui.value);
    }
  });
});