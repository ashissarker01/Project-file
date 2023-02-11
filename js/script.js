var swiper = new Swiper(".mySwiperpost", {
    slidesPerView: '3',
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev",
    },
  });


  new VenoBox({
    selector: '.my-video-links',
  });




var swiper = new Swiper(".mySwiper pic_slide_img", {
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    grabCursor:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 600,
    pagination: {
      el: ".swiper-pagination ",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev",
    },
  });


  new VenoBox({
    selector: '.my-video-links',
  });

  $("#slide_up_down").click(function(){
    $(".box").slideToggle(1000);
})



  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 300){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    }); 



      //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }



    
});

