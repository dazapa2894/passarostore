console.log("holi2???");

const boton_agregar_al_carrito = document.querySelectorAll(".agregar");
const color_swatches = document.querySelectorAll(".variant-color-swatch");

color_swatches.forEach(swatch_element => {

  console.log(swatch_element);

  swatch_element.addEventListener("click", function () {
    let variant_color = swatch_element.getAttribute("variant_color");
    let variant_img_src = swatch_element.getAttribute("variant_img_src");
    
    console.log("variant_color = " + variant_color);
    console.log("variant_img_src = " + variant_img_src);
    
    console.log(swatch_element);
    console.log(swatch_element.parentElement);
    console.log(swatch_element.parentElement.previousElementSibling);
    console.log(swatch_element.parentElement.previousElementSibling.querySelector(".product-img").setAttribute("src", variant_img_src));
    
    
  });
});

for (let i = 0; i < boton_agregar_al_carrito.length; i++) {
  boton_agregar_al_carrito[i].addEventListener("click", function () {
    console.log("shiii funssssioooonaaaaa! 3");

    let product_id = boton_agregar_al_carrito[i].getAttribute("product-id");
    let product_variant_id = boton_agregar_al_carrito[i].getAttribute("product-variant-id");
    console.log("product-id = " + product_id);
    console.log("product-variant-id = " + product_variant_id);
    
    let formData = {
      'items': [{
        'id': product_id,
        'quantity': 1
      }]
    };
    
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }, false);
}
