var $doc = $('html, body');

$('.menu-link').click(function () {
  $doc.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});

$('.button-collapse').sideNav({
  menuWidth: 290,
  edge: 'left',
  closeOnClick: true,
  draggable: true
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});