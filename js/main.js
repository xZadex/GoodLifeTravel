//mobile menu

function toggleMenu() {

   let mobileMenu = document.getElementById('mobile-nav-list');
   let displaySetting = mobileMenu.style.display;
   let menuButton = document.getElementById('hamburger');

   if (displaySetting == 'flex') {
     mobileMenu.style.display = 'none';
     menuButton.className = 'fa-solid fa-bars';
   }
   else {
     mobileMenu.style.display = 'flex';
     menuButton.className = 'fa-solid fa-xmark';
   }
 }



 // to top button
 let topButton = document.getElementById("top-button");

let showToTop = function () {
    let y = window.scrollY;
    if (y >= 200) {
        topButton.className = "to-top-button";
    } else {
        topButton.className = "to-top-button-hide";
    }
};

window.addEventListener("scroll", showToTop);
