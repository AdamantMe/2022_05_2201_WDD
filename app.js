let currentSlideIndex = 0;

showSlides(true, 0);

function changeSlide(n) {
  showSlides(false, n);
}

function showSlides(isSetTimeout, nextSlide) {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlideIndex += nextSlide;
  if (currentSlideIndex > slides.length - 1) { currentSlideIndex = 0 }
  if (currentSlideIndex < 0) {
    console.log(currentSlideIndex)
    currentSlideIndex = slides.length - Math.abs(currentSlideIndex) % slides.length 
    console.log(currentSlideIndex)
  }

  console.log(currentSlideIndex)
  slides[currentSlideIndex].style.display = "block";

  if (isSetTimeout == true) {
    setTimeout(function () {
      showSlides(true, 1);
    }, 8000)
  }
}
