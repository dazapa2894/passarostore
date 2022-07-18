window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  
  	$('body').addClass('loaded');

    const menu_passaro = document.querySelectorAll(".close-menu-passaro");
    const header = document.querySelector("#shopify-section-header");

    const logo_incial = $("header .header__heading .header__heading-link img").attr("src");
    const color_inicial_iconos = $(".menu-passaro span").css("color");

    menu_passaro.forEach(menu_passaro_element => {
      // console.log(menu_passaro_element);
      menu_passaro_element.addEventListener("click", function () {
        document.querySelector(".side-nav-menu").classList.toggle("oculto");
        document.querySelector("#menu-latera-overlay").classList.toggle("opened");
      });
    });

    window.onscroll = function () {
      fixed_header_toggler(header);
      fixHeaderIconColor(header, logo_incial, color_inicial_iconos);
    };

    
    $(".dropdown-trigger-nav").click( function(){
      let target = $(this).attr("dropdown-target");
      $("#" + target).slideToggle();
      $(this).find(".dropdown-indicator").toggleClass("opened");
    });

    $("#cerrar-notificacion").click( function(){
      $("#custom-notification").slideUp();
    });


});

// para volver a dejar los iconos de color oscuro ya que al hacer scroll sale un fondo blanco
function fixHeaderIconColor(header) {
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    console.log(logo_oscuro);
    $("header .header__heading .header__heading-link img").attr("src", logo_oscuro);
    $("#cart-icon-bubble").css("color", color_oscuro);
    $("#search-icon").css("color", color_oscuro);
    $("#account-search").css("color", color_oscuro);
    $(".hamburger-bar").css("background-color", color_oscuro);
    $(".hamburger+span").css("color", color_oscuro);
  } else {
    console.log(logo_claro);
    console.log("fixHeaderIconColor");
    $("header .header__heading .header__heading-link img").attr("src", logo_claro);
    $("#cart-icon-bubble").css("color", color_claro);
    $("#search-icon").css("color", color_claro);
    $("#account-search").css("color", color_claro);
    $(".hamburger-bar").css("background-color", color_claro);
    $(".hamburger+span").css("color", color_claro);
  }
}

function fixed_header_toggler(header) {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function custom_notificacion( titulo, mensaje, tipo = 1 ){ 

  console.log("titulo notificación =" + titulo);
  console.log("mensaje notificación =" + mensaje);
  console.log("tipo notificación =" + tipo);

  
  $("#titulo-notificacion").html(titulo);
  $("#descripcion-notificacion").html(mensaje);
  

  $("#custom-notification").slideDown();

}