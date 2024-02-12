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

var navbarData = [
  {
title : 'store',
first : ['Shop','Shop the Latest','Mac','iPad','iPhone','Apple Watch','Apple Vision Pro','Accessories'],
second : ['Find a Store','Order Status','Apple Trade In','Financing'],
third: ['Certified Refurbished','Education','Business','Veterans and Military','Government'],

  }
]

// sub menu
var subMenu = document.querySelector('.sub-menu');
var des_links = document.querySelectorAll('.nav-links a');
var first_row = document.getElementById('nav_first');
des_links.forEach((item) => {
    item.onmouseenter = () => {
        subMenu.style.height = '400px';
        subMenu.style.display = 'block';
        subMenu.style.opacity = '1';
    }
    subMenu.onmouseout = () => {
      subMenu.style.height = '0px';
      subMenu.style.display = 'none';
      subMenu.style.opacity = '0';
    }
});

function nav_store() {

navbarData[0].first.forEach((navs)=>{
  subMenu.innerHTML+=`
  <li>${navs}</li>
  `
})

// subMenu.innerHTML= `<div class="col-lg-3">
// <ul>
//     <li>Shop</li>
//                         <li>Shop the Latest</li>
//                         <li>Mac</li>
//                         <li>iPad</li>
//                         <li>iPhone</li>
//                         <li>Apple Watch</li>
//                         <li>Apple Vision Pro</li>
//                         <li>Accessories</li>
// </ul>
// </div>
// <div class="col-lg-2">
//     <ul>
//         <li>Quick Links</li>
//                             <li>Find a Store</li>
//                             <li>Order Status</li>
//                             <li>Apple Trade In</li>
//                             <li>Financing</li>
//     </ul>
// </div>
// <div class="col-lg-2">
//     <ul>
//         <li>Shop Special Stores</li>
//                             <li>Certified Refurbished</li>
//                             <li>Education</li>
//                             <li>Business</li>
//                             <li>Veterans and Military</li>
//                             <li>Government</li>
//     </ul>
// </div>
// <div class="col-lg-2">

// </div>`
}


