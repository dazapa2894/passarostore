var loadProductRecommendationsIntoSection = function () {
  var productRecommendationsSection = document.querySelector(".product-recommendations");
  if (productRecommendationsSection === null) {
    return;
  }
  var productId = productRecommendationsSection.dataset.productId;
  var limit = productRecommendationsSection.dataset.limit;
  var requestUrl = "/recommendations/products?section_id=product-recommendations&limit=" + limit + "&product_id=" + productId;
  var request = new XMLHttpRequest();
  request.open("GET", requestUrl);
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      var container = document.createElement("div");
      container.innerHTML = request.response;
      productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
    }
  };
  request.send();
};


document.addEventListener("shopify:section:load", function (event) {
  console.log("section loaded asddasd");
  if (event.detail.sectionId === "product-recommendations") {
    loadProductRecommendationsIntoSection();
  }
});

loadProductRecommendationsIntoSection();