$(".col-change-btn-wrapper").click( ()=>{
  console.log($(this));
  if ($(this).not(".active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});