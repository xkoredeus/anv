$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
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