$(".tab-trigger").click(function () {

  var id = $(this).attr("tab-target");
  $(".tab-content").css("display", none);
  $(id).css("display", block);
  console.log($(this).attr("tab-target"));

  
});