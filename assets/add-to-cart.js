console.log("holi2???");

const boton_agregar_al_carrito = document.querySelectorAll(".agregar");

for (let i = 0; i < boton_agregar_al_carrito.length; i++) {
  boton_agregar_al_carrito[i].addEventListener("click", function () {
    console.log("shiii funssssioooonaaaaa! 3");

    console.log("value = " + boton_agregar_al_carrito[i].getAttribute("value"));
    console.log("id = " + boton_agregar_al_carrito[i].getAttribute("id"));
    
    /*
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    */
  }, false);
}
