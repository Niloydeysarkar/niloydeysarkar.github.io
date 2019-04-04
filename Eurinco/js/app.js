//nav script start
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if (scroll > 89) {
      $(".navbar").addClass("nav-fix");
    }else{
      $(".navbar").removeClass("nav-fix");
    }
  });
  //nav script end







// sidenav script start
function openNav() {
    document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-332px";
}
// sidenav script end








    //nav search script start
    $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
//nav search script end







//back to top start
$(document).ready(function(){
    $(window).scroll(function()
    {
      if ($(this).scrollTop()>300) {
        $('#scroll').fadeIn();
      }
      else{
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(function(){
      $('html,body').animate({
        scrollTop:0 } , 600);
    return false;
      })
    });
//back to top end








//wow.js start
wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true        
    }
    )
    wow.init();
//wow.js end








// header slider start
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });

// header slider end








// Project & team section script Start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});
// Project & team section script end

//youtube popup script
jQuery(function(){
    jQuery("a.bla-1").YouTubePopUp();
});
//youtube popup script