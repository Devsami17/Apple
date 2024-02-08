var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay:{
      delay:3500,
      disableOnInteraction:false,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
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