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
