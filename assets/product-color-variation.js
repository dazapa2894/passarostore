if ($("#variaciones_color_wrapper #products-wrapper .card-wrapper").length < 1)
{
  console.log("--- OCULTANDO LA SECCIÓN DE VARIACIONES DE COLOR PORQUE NO HAY VARIACIONES PARA ESTE PRODUCTO ---");
  $("#variaciones_color_wrapper").css("display", "none");
}