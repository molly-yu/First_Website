function openModal(x) {
    document.getElementById("modal"+x).style.display = "block";
  }
  
  function closeModal(x) {
    document.getElementById("modal"+x).style.display = "none";
  }
  
  var slideIndex = 1;
  
  function plusSlides(n, x) {
    showSlides((slideIndex += n),x);
  }
  
  function currentSlide(n,x) {
    showSlides((slideIndex = n),x);
  }
  
  function showSlides(n, x) {
    var i;
    var slides = document.getElementsByClassName("mySlides-"+x);
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }