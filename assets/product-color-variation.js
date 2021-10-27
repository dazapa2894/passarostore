console.log($("#variaciones_color_wrapper #products-wrapper .card-wrapper"));
console.log($("#variaciones_color_wrapper #products-wrapper .card-wrapper").length);
if ($("#variaciones_color_wrapper #products-wrapper .card-wrapper").length < 1)
{
  $("#variaciones_color_wrapper").css("display", "none");
}