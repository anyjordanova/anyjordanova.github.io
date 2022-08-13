navbar = document.getElementById("navbar");
topButton = document.getElementById("js-topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.boxShadow = "0 0 10px rgb(86, 86, 86)";
    navbar.style.backdropFilter = "blur(4px)";
    navbar.style.backgroundColor = "#ffffff8d";

    topButton.style.visibility = "visible";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.backdropFilter = "blur(0px)";
    navbar.style.backgroundColor = "transparent";

    topButton.style.visibility = "hidden";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}