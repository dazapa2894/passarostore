$("#4-cols-btn, #3-cols-btn").click((event) => {
  
  console.log($(this));
  console.log(!$(this).hasClass("active"));

  if (!$(this).hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});