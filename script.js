// for seaech 
let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    SearchForm.classList.toggle('active');
    
    shoopingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}
// for seaech 

// for add to card
let shoopingCart= document.querySelector('.shooping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoopingCart.classList.toggle('active');
    SearchForm.classList.remove('active');
    
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}
// for add to card

// // for login page 
let LoginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    LoginForm.classList.toggle('active');
    SearchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
   
    navbar.classList.remove('active');
}

// // for login page 

// for mobile 
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    LoginForm.classList.remove('active');
   
}
// for mobile 

window.onscoll = () =>
{
    SearchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}


// slider section
// product-slider section
var swiper = new Swiper(".Product-slider", {
    loop:true,
    spaceBetween: 20,
   
    autoplay: {
        delay: 760,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });



  // review-slider section
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
   
    autoplay: {
        delay: 760,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });
  
  // review-slider section

  // slider section