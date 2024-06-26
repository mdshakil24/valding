
$(document).ready(function(){
  
    // Mobile Menu js
    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.va-header-menu ul').slideToggle();
    });


    
    

});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Add active class to the current button (highlight it)
var header = document.getElementById("menu-link");
var btns = header.getElementsByClassName("vabtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}