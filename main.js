$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      991: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
});
