$(".col-change-btn-wrapper").click( (e)=>{
  console.log($(e));
  console.log($(this));
  console.log(!$(this).hasClass("active"));

  if (!$(this).hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});