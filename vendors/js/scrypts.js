
// =================================================================================================================
// ================================================SLIDE SHOW=======================================================

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// =================================================================================================================
// ==================================================TIME===========================================================

var curDate = new Date();

                // Ngày hiện tại
                var curDay = curDate.getDate();

                // Tháng hiện tại
                var curMonth = curDate.getMonth() + 1;

                // Năm hiện tại
                var curYear = curDate.getFullYear();

                // Gán vào thẻ HTML
                document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;

// =================================================================================================================
// =================================================================================================================