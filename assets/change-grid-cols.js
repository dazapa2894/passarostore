$(".col-change-btn-wrapper").click( ()=>{
  console.log($(this).not(".active"));
  if (!$(this).hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});