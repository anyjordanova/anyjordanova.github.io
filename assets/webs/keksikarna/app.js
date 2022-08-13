//ACTIVE CLASS in menu nav; source: w3schools

// Get the nav container element
var navContainer = document.getElementById("js-menu__nav");

// Get all buttons with specific class inside the container
var btns = navContainer.getElementsByClassName("js-menu__nav--item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-nav");
    current[0].className = current[0].className.replace(" active-nav", "");
    this.className += " active-nav";
  });
}

//SHOW PRODUCTS in menu-conainer; source: w3schools
function showChoco() {
  var x = document.getElementById("js-menu-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display ="none";
  }
}