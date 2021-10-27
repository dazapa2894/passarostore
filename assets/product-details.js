$(".tab-trigger").click(function () {

  var id = $(this).attr("tab-target");
  console.log($(this));
  console.log($(this).attr("tab-target"));
  console.log(id)
  $(".tab-content").removeClass("active-tab");
  $(id).addClass("active-tab");

  
});

console.log($(".product__media-list .main_product_thumbnail_item_holder img.main_product_thumbnail_item"));
$(".product__media-list .main_product_thumbnail_item_holder img.main_product_thumbnail_item").click( function() {
  console.log("thumb clicked");
  console.log($(this));
  img_src = $(this).attr("src");

  $main_img = $("#producto_main_img img");
  $main_img.attr("src", img_src);

  if ($main_img[0].hasAttribute("srcset")) {
    console.log("tiene srcset");
    $main_img.removeAttr("srcset");
  }else{
    console.log("NO tiene srcset");
  }

});