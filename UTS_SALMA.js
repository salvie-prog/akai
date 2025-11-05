document.addEventListener("DOMContentLoaded", function() {
  const backsound = document.getElementById("backsound");
  const backsoundBtn = document.getElementById("backsoundBtn");
  const icon = backsoundBtn.querySelector("i");
  let isPlaying = false;
  backsoundBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (isPlaying) {
      backsound.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-music");
    } else {
      backsound.play().then(() => {
        icon.classList.remove("fa-music");
        icon.classList.add("fa-pause");
      }).catch(err => {
        console.log("Autoplay diblokir browser:", err);
      });
    }
    isPlaying = !isPlaying;
  });
});


//swiper

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
        swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

