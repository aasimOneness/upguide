(function ($, window, Typist) {
  /*---------owl-carousel------------*/

  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    smartSpeed: 2500,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 1,
        nav: true,
        loop: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });

  $(".skillitem").owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
    smartSpeed: 2500,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".teacher").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    smartSpeed: 2500,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
      },
    },
  });

  $(document).ready(function() {
    $(".testimonials-step .step-tab a").click(function () {
      var tab_id = $(this).attr("data-tab");

      $(".testimonials-step .step-tab a").removeClass("current");
      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  });

  /*-------tooltip---------*/

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /*-------------headder_fixed-------------*/

  $(window).scroll(function () {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 20) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  /*--------------ASO.JS---------------*/

  AOS.init();

  //refresh animations

  $(window).on("load", function () {
    AOS.refresh();
  });


  jQuery(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
    feedbackSlider.owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      autoplay: true,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>"
      ],
      responsive: {
        // breakpoint from 767 up
        767: {
          nav: true,
          dots: false
        }
      }
    });
  }); //end ready
  

  // Footer Content Read More / Read Less 
  
  $('.footer-readmore').click(function() {
    $('.foot-note').toggleClass('d-block');
    $('.footer-readmore').toggleClass('read-less');
    if ($('.footer-readmore').hasClass('read-less')) {
      $('.read-less').text("Read Less...")
    }else{
      $('.footer-readmore').text("Read More...")
    }
  });

})(jQuery, window);


/*--------------Menu---------------------*/

$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});
