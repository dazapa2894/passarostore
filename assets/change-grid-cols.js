$("#4-cols-btn").click((event) => {
  console.log(!$("#4-cols-btn").hasClass("active"));
  if (!$("#4-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});

$("#3-cols-btn").click((event) => {
  console.log(!$("#3-cols-btn").hasClass("active"));
  if (!$("#3-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
  }
});