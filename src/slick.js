var mySwiper = new Swiper('.swiper', {
  // 옵션 설정
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination', 
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

