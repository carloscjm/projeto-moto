var slideIndex = 1;
$(document).ready(function() {
    showSlides(slideIndex);
    let logado = localStorage.getItem('logado');
    if (logado) {
          $('.login').css('display', 'none');
          $('.logout').css('display', 'block');
    } else {
      $('.login').css('display', 'block');
      $('.logout').css('display', 'none');
    }

    // Adicionando ação ao clicar no botão usando jQuery
  $('.logout').click(function() {
    localStorage.setItem('logado', false);
    window.location.href = 'src/login/login.html';
  });
});


function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }