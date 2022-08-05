var swiperh = new Swiper(".heroes", {
  // speed: 500,
  // effect: "fade",
  pagination: {
    el: ".swiper-pagination-heroes",
    clickable: true,
  },

  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: "fade",
});

var swiper = new Swiper(".avengers", {
  slidesPerView: 3,
  // spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-techAvengers",
    prevEl: ".swiper-button-prev-techAvengers",
  },
});

var swiper1 = new Swiper(".partner-companies", {
  loop: true,
  freeMode: true,
  spaceBetween: 10,
  grabCursor: true,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  freeMode: true,
  speed: 9000,
  freeModeMomentum: false,

  // // effect: "coverflow",
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 5,
  // slidesPerGroup: 1,
  // spaceBetween: 20,

  // loop: true,
  // // coverflowEffect: {
  // //   rotate: 50,
  // //   stretch: 0,
  // //   depth: 100,
  // //   modifier: 1,
  // //   slideShadows: true,
  // // },
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
});

var swiper3 = new Swiper(".halloffame", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  // loopFillGroupWithBlank: true,
  // spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-hof-button-next",
    prevEl: ".swiper-hof-button-prev",
  },
});

var swiper4 = new Swiper(".liveCoursesSwiper", {
  slidesPerView: 3.1,
  slidesPerGroup: 1,
  // loopFillGroupWithBlank: true,
  // spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-liveCourses",
    prevEl: ".swiper-button-prev-liveCourses",
  },
});

var swiper4 = new Swiper(".affordableCoursesSwiper", {
  slidesPerView: 3.1,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  // spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-affordableCourses",
    prevEl: ".swiper-button-prev-affordableCourses",
  },
});

var swiper4 = new Swiper(".communitycourses-swiper", {
  slidesPerView: 3.1,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  // spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-communityCourses",
    prevEl: ".swiper-button-prev-communityCourses",
  },
});

var swiper4 = new Swiper(".testSeries-swiper", {
  slidesPerView: 3.1,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  // spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-testSeries",
    prevEl: ".swiper-button-prev-testSeries",
  },
});

function selectProgram(btnClass, program) {
  var element = document.getElementsByClassName("live-button");
  if (element[0].classList.contains("selected-program"))
    element[0].classList.remove("selected-program");
  element = document.getElementsByClassName("affordable-button");
  if (element[0].classList.contains("selected-program"))
    element[0].classList.remove("selected-program");
  element = document.getElementsByClassName("community-button");
  if (element[0].classList.contains("selected-program"))
    element[0].classList.remove("selected-program");
  element = document.getElementsByClassName("oneNeuron-button");
  if (element[0].classList.contains("selected-program"))
    element[0].classList.remove("selected-program");
  element = document.getElementsByClassName("testSeries-button");
  if (element[0].classList.contains("selected-program"))
    element[0].classList.remove("selected-program");

  element = document.getElementsByClassName(btnClass);
  element[0].classList.add("selected-program");

  element = document.getElementsByClassName("live-programs");
  element[0].style.display = "none";
  element = document.getElementsByClassName("affordable-programs");
  element[0].style.display = "none";
  element = document.getElementsByClassName("community-programs");
  element[0].style.display = "none";
  element = document.getElementsByClassName("one-neuron-programs");
  element[0].style.display = "none";
  element = document.getElementsByClassName("test-series-programs");
  element[0].style.display = "none";

  element = document.getElementsByClassName(program);
  element[0].style.display = "block";
}
