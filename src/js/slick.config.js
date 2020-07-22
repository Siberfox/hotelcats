import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.single-item').slick({
    arrows: true,
    prevArrow: $('.rooms-prev'),
    nextArrow: $('.rooms-next'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1
  });
  $('.slider').slick({
    arrows: true,
    prevArrow: $('.review-prev'),
    nextArrow: $('.review-next'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        },
        breakpoint: 1200,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
