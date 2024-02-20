// Tutorial: https://youtu.be/Wxnpze5LK3Y

var sliderCounter = 0;
var sliderContent = [
  "Learning Languages",
  "Understand Languages",
  "Speaking Languagest",
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");


function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  speed: 1500,
  slidesPerView: 4,
  spaceBetween: 60,
  mousewheel: true,
  parallax: true,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 40,
    slideShadows: true
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    2300: {
      slidesPerView: 5,
      spaceBetween: 60
    },
    2900: {
      slidesPerView: 6,
      spaceBetween: 60
    }
  }
});

