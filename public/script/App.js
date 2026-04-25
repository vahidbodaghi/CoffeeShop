document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const navBar = document.querySelector(".nav-bar");

  if (mobileMenuButton && navBar) {
    
    mobileMenuButton.addEventListener("click", function () {
      navBar.classList.toggle("-translate-x-full");
    });

    
    const closeButton = navBar.querySelector(".closeButton");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        navBar.classList.add("-translate-x-full");
      });
    }
  }
});
