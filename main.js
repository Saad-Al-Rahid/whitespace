$(document).ready(function () {
  $(".pricing__cards").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
      },
      991: {
        items: 3,
        mouseDrag: false,
      },
    },
  });
});

$(document).ready(function () {
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 3,
      },
    },
  });
});
