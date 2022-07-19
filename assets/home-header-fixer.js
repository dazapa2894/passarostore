window.addEventListener('DOMContentLoaded', (event) => {
  
  console.log("only home = " + on_home);
  
  $('#shopify-section-header').addClass('home-page')

  $("header .header__heading .header__heading-link img").attr("src", logo_oscuro);
  $("#cart-icon-bubble").css("color", color_oscuro);
  $("#account-icon").css("color", color_oscuro);
  $("#search-icon").css("color", color_oscuro);
  $(".hamburger-bar").css("background-color", color_oscuro);
  $(".hamburger+span").css("color", color_oscuro);

});
