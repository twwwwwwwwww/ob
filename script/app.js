$(function(){
  $(".i_slide").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      },
    ]
  });
});