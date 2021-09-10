window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const menu_passaro = document.querySelectorAll(".close-menu-passaro");

    menu_passaro.forEach(menu_passaro_element => {
      // console.log(menu_passaro_element);
      menu_passaro_element.addEventListener("click", function () {
        document.querySelector(".side-nav-menu").classList.toggle("oculto");
      });
    });
      
  
});