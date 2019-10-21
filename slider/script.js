var slideIndex = 1;
showSlide(1)
function showSlide(n) {
  var slides = document.getElementsByClassName("item")
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}


function plusSlides(n) {
  showSlide(slideIndex += n);
}