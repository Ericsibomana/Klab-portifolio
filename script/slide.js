var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    // slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "auto",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });