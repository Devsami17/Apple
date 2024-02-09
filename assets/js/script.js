var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay:{
      delay:4000,
     
      disableOnInteraction:false,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },


    // },
  });

  function openNav(){
    var resNav = document.querySelector('.res-nav');
  resNav.style.left='0%';
  document.body.style.overflow='hidden'
  }
  function navClose(){
    var resNav = document.querySelector('.res-nav');
    resNav.style.left='100%';
    document.body.style.overflow='auto'
  }





