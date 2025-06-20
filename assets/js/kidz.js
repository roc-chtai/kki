(function($) {
  'use strict';

  /*======== 1. PREELOADER ========*/
	$(window).on('load', function () {
		$('#preloader').fadeOut(1000);
	});

  /*======== 2. NAVBAR ========*/

  $(window).on('load', function(){

    var header_area = $('.header');
    var main_area = header_area.find('.navbar');
    var zero = 0;
    var navbarSticky = $('.navbar-sticky');

    $(window).scroll(function(){
      var st = $(this).scrollTop();
      if (st > zero){
        navbarSticky.addClass('navbar-scrollUp');
      } else {
         navbarSticky.removeClass('navbar-scrollUp');
      }
      zero = st;

      if(main_area.hasClass('navbar-sticky') && ( $(this).scrollTop() <= 300 || $(this).width() <= 300)){
        main_area.removeClass('navbar-scrollUp');
        main_area.removeClass('navbar-sticky').appendTo(header_area);
        header_area.css('height', 'auto');
      }else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 300 ){
        header_area.css('height', header_area.height());
        main_area.addClass('navbar-scrollUp');
        main_area.css({'opacity': '0'}).addClass('navbar-sticky');
        main_area.appendTo($('body')).animate({'opacity': 1});
      }
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

  /*======== RS-SLIDER ========*/
  var rev_slider_1 = $('#rev_slider_1');
  if (rev_slider_1.length !== 0) {
    $('#rev_slider_1').show().revolution ({
      delay: 5000,
      sliderLayout: 'fullwidth',
      sliderType:'standard',
      responsiveLevels: [1171, 1025, 769, 480],
      gridwidth: [1171, 1025, 769, 480],
      gridheight: [560, 500, 450, 350],

      /* basic navigation arrows and bullets */
      navigation: {
        arrows: {
          enable: true,
          style: 'hesperiden',
          hide_onleave: false
        },
  
        bullets: {
          enable: false,
          style: 'hesperiden',
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 20,
          space: 5
        }
      },
      disableProgressBar:'on'
    });
  }

  /*======== RS-SLIDER2 ========*/
  var rev_slider_custom_2 = $('#rev_slider_custom_2');
  if (rev_slider_custom_2.length !== 0) {
    $('#rev_slider_custom_2').show().revolution ({
      delay: 5000,
      sliderLayout: 'fullwidth',
      sliderType:'standard',
      responsiveLevels: [1171, 1025, 769, 480],
      gridwidth:[1171, 1025, 769, 480],
      gridheight: [655, 605, 555, 450],

      /* basic navigation arrows and bullets */
      navigation: {
        arrows: {
          enable: true,
          style: 'hesperiden',
          hide_onleave: false
        },
        
        bullets: {
          enable: false,
          style: 'hesperiden',
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 20,
          space: 15
        }
      },
      disableProgressBar:'on'
    });
  }

  /*======== RS-SLIDER3 ========*/
  var rev_slider_custom_3 = $('#rev_slider_custom_3');
  if (rev_slider_custom_3.length !== 0) {
    $('#rev_slider_custom_3').show().revolution ({
      delay: 5000,
      sliderLayout: 'fullscreen',
      sliderType:'standard',
      responsiveLevels: [1171, 1025, 769, 480],
      gridwidth:[1171, 1025, 769, 480],
      gridheight: [655, 605, 555, 450],

      /* basic navigation arrows and bullets */
      navigation: {
        arrows: {
          enable: true,
          style: 'hesperiden',
          hide_onleave: false
        },

        bullets: {
          enable: false,
          style: 'hesperiden',
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 20,
          space: 15
        }
      },
      disableProgressBar:'on'
    });
  }

  /*======== RS-SLIDER4 ========*/
  var rev_slider_custom_4 = $('#rev_slider_custom_4');
  if (rev_slider_custom_4.length !== 0) {
    $('#rev_slider_custom_4').show().revolution ({
      delay: 5000,
      sliderLayout: 'fullwidth',
      sliderType:'standard',
      responsiveLevels: [1171, 1025, 769, 480],
      gridwidth:[1171, 1025, 769, 480],
      gridheight: [655, 605, 555, 450],

      /* basic navigation arrows and bullets */
      navigation: {
        arrows: {
          enable: true,
          style: 'hesperiden',
          hide_onleave: false
        },
        
        bullets: {
          enable: false,
          style: 'hesperiden',
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 20,
          space: 15
        }
      },
      disableProgressBar:'on'
    });
  }

  //============================== BRAND SLIDER =========================
  var brands = $('#brands');
  if(brands.length !== 0){
    brands.owlCarousel({
      loop:true,
      margin:30,
      autoplay: true,
      autoplayTimeout: 3000,
      nav:false,
      dots: false,
      responsiveClass: true,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:3
        },
        992:{
          items:5
        }
      }
    });
  }

  //============================== testimonial =========================
  var testimonial = $('#testimonial');
  if(testimonial.length !== 0){
    testimonial.owlCarousel({
      loop:true,
      margin:30,
      dots: false,
      nav:true,
      navText : ['<i class="fa fa-arrow-left"></i>','<i class="fa fa fa-arrow-right"></i>'],
      items:1
    });
  }

  //============================== categories =========================
  var categories_slider = $('.categories-slider');
  if(categories_slider.length !== 0){
    categories_slider.owlCarousel({
      margin: 20,
      loop: true,
      autoplay: false,
      nav: true,
      navText : ['<i class="fa fa-arrow-left"></i>','<i class="fa fa fa-arrow-right"></i>'],
      dots: false,
      autoplayTimeout: 1000,
      items: 1,
      center: true
    });
  }

  //============================== TEAM SLIDER =========================
  var team_slider = $('.team-slider');
  if(team_slider.length !== 0){
    team_slider.owlCarousel({
      loop:true,
      margin:30,
      dots: false,
      nav:true,
      navText : ['<i class="fa fa-arrow-left"></i>','<i class="fa fa fa-arrow-right"></i>'],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:4
        }
      }
    });
  }

 

  //============================== ISOTOPE =========================
    // init Isotope
    var $grid = $('.grid');
    if ($grid.length !== 0) {
      $grid.imagesLoaded(function(){
        // init Isotope after all images have loaded
        $grid.isotope({
          itemSelector: '.element-item',
          layoutMode: 'fitRows'
        });
      });
    }

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });

    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });


  //============================== VIDEOBOX =========================
  var videoBox = $('.video-box i');
  videoBox.on('click', function(){
    var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
  });

  //============================== SELECT 2 =========================
  var select2_select = $(".select2-select");
  if (select2_select.length !== 0){
    select2_select.select2({
      minimumResultsForSearch: -1
    });
  }

  //============================== VIDEO BOX =========================
  $('.box-video').click(function(){
    $('iframe',this)[0].src += '&amp;autoplay=1';
    $(this).addClass('open');
  });

  //============================== COUNDOWN =========================
  var courseTimer = $('#courseTimer');
  if (courseTimer.length !== 0) {
    courseTimer.syotimer({
      year: 2026,
      month: 5,
      day: 10,
      hour: 20,
      minute: 30
    });
  }

  var comingSoon = $('#comingSoon');
  if (comingSoon.length !== 0) {
    comingSoon.syotimer({
      year: 2026,
      month: 5,
      day: 10,
      hour: 20,
      minute: 30
    });
  }

  /*======== 18. COUNTER-UP ========*/
  var counter = $('#counter');
  if (counter.length) {
    var a = 0;
    $(window).scroll(function() {
      var oTop = counter.offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 5000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    });
  }


  // element-right-sidebar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.element-right-sidebar').addClass('sidebar-fixed');
    } else {
      $('.element-right-sidebar').removeClass('sidebar-fixed');
    }

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 590) {
      $('.element-right-sidebar').addClass('right-sidebar-absolute').removeClass('sidebar-fixed');
    } else {
      $('.element-right-sidebar').removeClass('right-sidebar-absolute');
    }
  });

  /*======== 12. MAP ========*/
  function initialize() {
    var myLatLng = { lat: 53.385873, lng: -1.471471 };

    //Custom Style
    var styles = [
      {
        featureType: 'landscape',
        stylers: [
          { color: '#eeddee' }
        ]
      }, {
        featureType: 'all',
        stylers: [
          { hue: '#ff0000' }
        ]
      }, {
        featureType: 'road',
        stylers: [
          { hue: '#5500aa' },
          { saturation: -70 }
        ]
      }, {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
          { hue: '#000066' }
        ]
      }, {
        featureType: 'poi', //points of interest
        stylers: [
          { hue: '#0044ff' }
        ]
      }
    ];
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(53.385873, -1.471471),
      styles: styles

    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = 'assets/img/marker.png';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  var mapId = $('#map');
  if (mapId.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  //============================== ANIMATION =========================
  var $animation_elements = $('.animated');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var animationType = $(this).attr('data-animation');

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass(animationType);
      } else {
        $element.removeClass(animationType);
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  /*======== COUNT INPUT (Quantity) ========*/
  $('.incr-btn').on('click', function(e) {
    var newVal;
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
    if ($button.data('action') === 'increase') {
        newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below 1
      if (oldValue > 1) {
          newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
        $button.addClass('inactive');
      }
    }
    $button.parent().find('.quantity').val(newVal);
    e.preventDefault();
  });

  /*======== TOOLTIP  ========*/
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

 

  /*======== 10. SMOOTH SCROLLING TO SECTION ========*/
  $('.scrolling  a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');

    function customVeocity(set_offset){
      $(target).velocity('scroll', {
        duration: 800,
        offset: set_offset,
        easing: 'easeOutExpo',
        mobileHA: false
      });
    }

    if ($('#body').hasClass('up-scroll') || $('#body').hasClass('static')) {
      customVeocity(2);
    } else {
      customVeocity(-90);
    }

  });

  /*======== 11.PRICE SLIDER RANGER  ========*/
  var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
  if(nonLinearStepSlider){
    noUiSlider.create(nonLinearStepSlider, {
      connect: true,
      start: [125, 750],
      range: {
          'min': [0],
          'max': [1000]
      }
    });
  }

  var sliderValue = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
  ];

  // Display the slider value and how far the handle moved
  // from the left edge of the slider.
  var priceRange = document.getElementById('price-range');
  if (priceRange) {
    nonLinearStepSlider.noUiSlider.on('update', function(values, handle) {
      sliderValue[handle].innerHTML = '$' + Math.floor(values[handle]);
    });
  }
	
 /*======== 9. BACK TO TOP ========*/
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('#back-to-top').css({
          'opacity': '1',
          'visibility': 'visible'
        });
      } else {
        $('#back-to-top').css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      }
    });
  });

	
// scrollup (找不到使用處)
  $(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});

$('.scrollup').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});


// 會員
function isMobile() {
  return window.innerWidth < 768;
}

function iconInitOnLoad() {
  var memberBtn = document.getElementById('member-float');
  var backTop = document.getElementById('back-to-top');
  if (!memberBtn) return;

  if (isMobile()) {
    // 手機：至頂才觸發彈跳，離開頂端永遠不 bounce
    if (window.scrollY < 1) {
      memberBtn.style.bottom = '25px';
      memberBtn.classList.remove('bounce-loop');
      void memberBtn.offsetWidth; // 強制 reflow，確保動畫可重播
      memberBtn.classList.add('bounce-loop');
      setTimeout(function() {
        memberBtn.classList.remove('bounce-loop');
      }, 400); // 與動畫時間一致
      if (backTop) backTop.style.opacity = '0';
    } else {
      memberBtn.style.bottom = '75px';
      memberBtn.classList.remove('bounce-loop');
    }
  } else {
    // 桌機：維持原本行為
    if (window.scrollY < 1) {
      memberBtn.classList.remove('bounce-loop');
      void memberBtn.offsetWidth;
      memberBtn.classList.add('bounce-loop');
      setTimeout(function() {
        memberBtn.classList.remove('bounce-loop');
        memberBtn.style.bottom = '20px';
      }, 360);
      if (backTop) backTop.style.opacity = '0';
    } else {
      memberBtn.classList.remove('bounce-loop');
      memberBtn.style.bottom = '75px';
      setTimeout(function() {
        memberBtn.classList.remove('bounce-loop');
        void memberBtn.offsetWidth;
        memberBtn.classList.add('bounce-loop');
      }, 160);
    }
  }
}

// 監聽 
window.addEventListener('resize', iconInitOnLoad);

// 載入
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(iconInitOnLoad, 20);
});
window.addEventListener('load', iconInitOnLoad);
// 滾動
window.addEventListener('scroll', iconInitOnLoad);

  /*======== 11.Wow Js  ========*/
  new WOW().init();

  /*======== Google Analytics  ========*/

function enableDropdownEvents() {
  // 先清掉所有 hover/click
  $('.navbar-nav .dropdown').off('mouseenter mouseleave click');
  $('.dropdown-submenu').off('mouseenter mouseleave click');

  if(window.innerWidth > 991) {
    // 桌機/平板: hover 和 click 都可展開
    $('.navbar-nav .dropdown').hover(
      function() {
        $(this).addClass('show');
        $(this).find('> .dropdown-menu').addClass('show');
      },
      function() {
        $(this).removeClass('show');
        $(this).find('> .dropdown-menu').removeClass('show');
      }
    ).on('click', '> a', function(e) {
      // 點擊展開/收合
      var $parent = $(this).parent();
      var $menu = $parent.find('> .dropdown-menu');
      if($menu.length) {
        e.preventDefault();
        e.stopPropagation();
        $parent.toggleClass('show');
        $menu.toggleClass('show');
      }
    });

    $('.dropdown-submenu').hover(
      function() {
        $(this).addClass('show');
        $(this).find('> .sub-menu').addClass('show');
      },
      function() {
        $(this).removeClass('show');
        $(this).find('> .sub-menu').removeClass('show');
      }
    ).on('click', '> a', function(e) {
      var $parent = $(this).parent();
      var $menu = $parent.find('> .sub-menu');
      if($menu.length) {
        e.preventDefault();
        e.stopPropagation();
        $parent.toggleClass('show');
        $menu.toggleClass('show');
      }
    });

  } else {
    // 手機: 只允許 click
    $('.navbar-nav .dropdown').on('click', '> a', function(e) {
      var $parent = $(this).parent();
      var $menu = $parent.find('> .dropdown-menu');
      if($menu.length) {
        e.preventDefault();
        e.stopPropagation();
        $parent.siblings('.dropdown.show').removeClass('show')
          .find('.dropdown-menu.show').removeClass('show');
        $parent.toggleClass('show');
        $menu.toggleClass('show');
      }
    });

    $('.dropdown-submenu').on('click', '> a', function(e) {
      var $parent = $(this).parent();
      var $menu = $parent.find('> .sub-menu');
      if($menu.length) {
        e.preventDefault();
        e.stopPropagation();
        $parent.siblings('.dropdown-submenu.show').removeClass('show')
          .find('.sub-menu.show').removeClass('show');
        $parent.toggleClass('show');
        $menu.toggleClass('show');
      }
    });
  }
}

// resize 收回
$(window).on('resize', function(){
  enableDropdownEvents();
  $('.dropdown-menu.show, .dropdown.show, .sub-menu.show, .dropdown-submenu.show').removeClass('show');
  $('.navbar-collapse').removeClass('show').attr('style','');
  $('.navbar-toggler').attr('aria-expanded', 'false');
});

// 一進頁面就掛
$(document).ready(function(){
  enableDropdownEvents();
});

})(jQuery);
