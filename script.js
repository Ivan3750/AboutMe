$(document).ready(function(){ 
  $(window).scroll(function(){ 
    if(this.scrollY > -1){
      $(".header__nav").removeClass("this");
      $(".header__nav").removeClass("this");

      $('.header__link:nth-child(1)').addClass("this"); 
    }else{ 
      $('.header__nav').removeClass("this"); 
    }
  })
})
$(document).ready(function(){ 
    $(window).scroll(function(){ 
      if(this.scrollY > 500){ 
        $(".header__link").removeClass("this");
        $('.header__link:nth-child(2)').addClass("this"); 
      }else{ 
        $('.header__link:nth-child(2)').removeClass("this"); 
      }
    })
})


$(document).ready(function(){ 
  $(window).scroll(function(){ 
    if(this.scrollY > 1400){ 
      $(".header__link").removeClass("this");
      $('.header__link:nth-child(3)').addClass("this"); 
      }else{ 
        $('.header__link:nth-child(3)').removeClass("this"); 
      }
    })
})


$(document).ready(function(){ 
  $(window).scroll(function(){ 
    if(this.scrollY > 3000){ 
      $(".header__link").removeClass("this");
      $('.header__link:nth-child(4)').addClass("this"); 
      }else{ 
        $('.header__link:nth-child(4)').removeClass("this"); 
      }
    })
})

$(document).ready(function(){ 
  $(window).scroll(function(){ 
    if(this.scrollY > 3700){ 
      $(".header__link").removeClass("this");
      $('.header__link:nth-child(5)').addClass("this"); 
      }else{ 
        $('.header__link:nth-child(5)').removeClass("this"); 
      }
    })
})


document.addEventListener("DOMContentLoaded", function() {
  const animatedText = document.getElementById("animatedText");
  const words = [" Freelance Designer.", " Ivan Kohan", " Profesional"];
  let currentWordIndex = 0;
  let currentIndex = 0;
  let isDeleting = false;

  function animateText() {
    const currentText = words[currentWordIndex].slice(0, currentIndex);
    animatedText.textContent = currentText;

    if (!isDeleting) {
      currentIndex++;

      if (currentIndex > words[currentWordIndex].length) {
        isDeleting = true;
        currentIndex = words[currentWordIndex].length - 1;
        setTimeout(animateText, 500); // Пауза перед стиранням
      } else {
        setTimeout(animateText, 100); // Затримка перед наступним символом
      }
    } else {
      currentIndex--;

      if (currentIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(animateText, 1000); // Пауза перед наступним словом
      } else {
        setTimeout(animateText, 50); // Затримка перед стиранням наступного символу
      }
    }
  }

  // Почати анімацію після завантаження сторінки
  setTimeout(function() {
    animatedText.classList.remove("hidden");
    animateText();
  }, 1000);
});
