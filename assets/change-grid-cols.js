$("#4-cols-btn").click((event) => {
  // console.log(!$("#4-cols-btn").hasClass("active"));
  if (!$("#4-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
    $("#main-collection-product-grid").addClass("grid--4-col-desktop");
    $("#main-collection-product-grid").removeClass("grid--3-col-desktop");
    
  }
});

$("#3-cols-btn").click((event) => {
  // console.log(!$("#3-cols-btn").hasClass("active"));
  if (!$("#3-cols-btn").hasClass("active")) {
    $(".col-change-btn-wrapper").toggleClass("active");
    $("#main-collection-product-grid").addClass("grid--3-col-desktop");
    $("#main-collection-product-grid").removeClass("grid--4-col-desktop");
    
  }
});