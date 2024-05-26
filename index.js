document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu_toggle");
  const menuToggle2 = document.getElementById("menu_toggle2");
  const mobileMenu = document.getElementById("mobile_menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    console.log("test");
  });

  menuToggle2.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("nav_bar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll Down
      navBar.classList.remove("show");
      navBar.classList.add("hide");
    } else {
      // Scroll Up
      navBar.classList.remove("hide");
      navBar.classList.add("show");
    }
    lastScrollTop = scrollTop;
  });
});
