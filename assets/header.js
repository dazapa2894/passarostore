window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const menu_passaro = document.querySelectorAll(".close-menu-passaro");
    const header = document.querySelector("#shopify-section-header");

    menu_passaro.forEach(menu_passaro_element => {
      // console.log(menu_passaro_element);
      menu_passaro_element.addEventListener("click", function () {
        document.querySelector(".side-nav-menu").classList.toggle("oculto");
        document.querySelector("#menu-latera-overlay").classList.toggle("opened");
      });
    });

    window.onscroll = function () {
      fixed_header_toggler()
    };

    function fixed_header_toggler() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        header.classList.add("fixed");
      }else{
        header.classList.remove("fixed");
      }
    }
    
    $(".dropdown-trigger-nav").click( function(){
      let target = $(this).attr("dropdown-target");
      $("#" + target).slideToggle();
      $(this).find(".dropdown-indicator").toggleClass("opened");
    });
  
});