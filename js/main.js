$('.heroSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  prevArrow: '<button class="btn btn-light prevArrow"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button class="btn btn-light nextArrow"><i class="fa fa-angle-right"></i></button>'
})


$('.customSlider').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  speed: 900,
  nextArrow: '<button class="btn btn-light arrowBtn nextBtn"><i class="fa fa-angle-right"></i></button>',
  prevArrow: '<button class="btn btn-light arrowBtn prevBtn"><i class="fa fa-angle-left"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.secondSlider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  prevArrow: '<button class="btn btn-light prevArrow"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button class="btn btn-light nextArrow"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})



$(function () {

  let i = 0;
  function change() {
    ++i;
    $($("main div")[i - 1]).animate({ width: "20%" }, 0.01).removeClass("a");
    $($('.slide li')[i - 1]).removeClass("b");
    if (i == 5) {
      i = 0;
    }
    $($("main div")[i]).animate({ width: "80%" }).addClass("a");
    $($('.slide li')[i]).addClass("b");
  }
  var a = setInterval(change, 5000);

  let j = 0;
  $('main div').click(function () {
    clearInterval(a);
    j = $(this).index();
    if (j != 0 || j != 4) {
      $('span').removeClass('c');
    }
    if ($(this).hasClass("a")) { }
    else {
      $('main div').animate({ width: "20%" }, 0.5).removeClass('a');
      $('.slide li').removeClass('b');
      $(this).animate({ width: "80%" }, 0).addClass('a');
      $($('.slide li')[$(this).index()]).addClass('b');
    }
  });

  $('span').click(function () {
    clearInterval(a);
    j = $('.a').index();
    if (j == 0 && $(this).hasClass('prev')) {
      $($('main div')[0]).animate({ width: "20%" }, 0.01).removeClass("a")
      $($('.slide li')[0]).removeClass("b");
      $($('main div')[4]).animate({ width: "80%" }, 0).addClass("a")
      $($('.slide li')[4]).addClass("b");
    }
    else if (j == 4 && $(this).hasClass('next')) {
      $($('main div')[4]).animate({ width: "20%" }, 0.01).removeClass("a")
      $($('.slide li')[4]).removeClass("b");
      $($('main div')[0]).animate({ width: "80%" }, 0).addClass("a")
      $($('.slide li')[0]).addClass("b");
    }
    else {
      if ($(this).hasClass("prev")) {
        $($('main div')[j]).animate({ width: "20%" }, 0.01).removeClass("a")
        $($('.slide li')[j]).removeClass("b");
        $($('main div')[j - 1]).animate({ width: "80%" }, 0).addClass("a")
        $($('.slide li')[j - 1]).addClass("b");
      }
      else {
        $($('main div')[j]).animate({ width: "20%" }, 0.01).removeClass("a")
        $($('.slide li')[j]).removeClass("b");
        $($('main div')[j + 1]).animate({ width: "80%" }, 0).addClass("a")
        $($('.slide li')[j + 1]).addClass("b");
      }
    }

  });

});