let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(num) {
  showSlides(num);
}

function showSlides(index) {
  let slide = document.getElementsByClassName("carousel");
  let slides = document.getElementsByClassName("img-carousel");
  let slides2 = document.getElementsByClassName("text-carousel");
  let circle = document.getElementsByClassName("circle");

  slideIndex = index;
  for (let i = 0; i < slide.length; i++) {
    if (i === slideIndex - 1) {
      slide[i].style.display = "flex";
    } else {
      slide[i].style.display = "none";
    }
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides2[i].style.display = "none";
  }
  for (let j = 0; j < circle.length; j++) {
    circle[j].className = circle[j].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "block";
  circle[slideIndex - 1].className += " active";
}
