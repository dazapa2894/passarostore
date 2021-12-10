$(".tab-trigger").click(function () {

  var id = $(this).attr("tab-target");
  // console.log($(this));
  // console.log($(this).attr("tab-target"));
  // console.log(id);
  // console.log($(this).parent().parent().find(" > li"));
  var $los_li = $(this).parent().parent().find(" > li");
  var $el_li = $(this).parent();
  $los_li.removeClass("active-li-tab");
  $el_li.addClass("active-li-tab");
  $(".tab-content").removeClass("active-tab");
  $(id).addClass("active-tab");

  
});

console.log($(".product__media-list .main_product_thumbnail_item_holder img.main_product_thumbnail_item"));
$(".product__media-list .main_product_thumbnail_item_holder img.main_product_thumbnail_item").click(function () {
  console.log("thumb clicked");
  console.log($(this));
  img_src = $(this).attr("src");

  $main_img = $("#producto_main_img img");
  $main_img.attr("src", img_src);
  $(".product-media-modal__content img").attr("src", img_src);

  if ($main_img[0].hasAttribute("srcset")) {
    console.log("tiene srcset");
    $main_img.removeAttr("srcset");
  }else{
    console.log("NO tiene srcset");
  }

});


console.log($("button.product__media-toggle"));
$("button.product__media-toggle").click(function () {
  console.log("thumb clicked");
  console.log($(this));
  console.log($(this).prev().find("img"));
  img_src = $(this).prev().find("img").attr("src");
  console.log(img_src);

  console.log($("div.product-media-modal__content img"));
  $("div.product-media-modal__content img").attr("src", img_src);
  $("div.product-media-modal__content img").addClass("active");


});