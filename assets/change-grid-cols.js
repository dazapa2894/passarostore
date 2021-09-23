$(".col-change-btn-wrapper").click( ()=>{
  console.log($(this));
  console.log(!$(this).hasClass("active"));

  if (!$(this).hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});