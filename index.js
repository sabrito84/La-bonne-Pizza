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
