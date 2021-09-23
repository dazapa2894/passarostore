$("#4-cols-btn").click((event) => {

  if (!$("#4-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});

$("#3-cols-btn").click((event) => {
  if (!$("#3-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});