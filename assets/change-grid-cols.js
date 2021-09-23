$(".col-change-btn-wrapper:not(.active)").click( ()=>{
  console.log($(this));
  $(".col-change-btn-wrapper").toggleClass("active");
});