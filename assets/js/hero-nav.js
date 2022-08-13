let menuContainer = document.getElementsByClassName("hero-nav__menu");
let menuItems = document.getElementsByClassName("menu-item");


for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        let activeLink = document.getElementsByClassName("active");
        activeLink[0].className = activeLink[0].className.replace(" active", "");
        this.className += " active";
    });
}