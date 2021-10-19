$(".tab-trigger").click(function () {

  var id = $(this).attr("tab-target");
  console.log($(this));
  console.log($(this).attr("tab-target"));
  console.log(id)
  $(".tab-content").removeClass("active-tab");
  $(id).addClass("active-tab");

  
});