$(".tab-trigger").click(function () {

  var id = $(this).attr("tab-target");
  console.log($(this));
  console.log($(this).attr("tab-target"));
  console.log(id)
  $(".tab-content").removeClass("active-tab");
  $(id).addClass("active-tab");

  
});

$(".product__media-list .main_product_thumbnail_item_holder img.main_product_thumbnail_item").click( function() {
  img_src = $(this).attr("src");
  $("#producto_main_img img").removeAttr("srcset");
  $("#producto_main_img img").attr("src", img_src);

});