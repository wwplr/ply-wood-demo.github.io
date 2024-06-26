let slideIndex = 1;
showSlides(slideIndex);

function automaticSlide() {
  showSlides(slideIndex += 1);
}

let slideInterval = setInterval(automaticSlide, 3000);

function pauseSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(automaticSlide, 3000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  pauseSlide();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  pauseSlide();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}
