console.log("holi2???");

const boton_agregar_al_carrito = document.querySelectorAll(".agregar");

for (let i = 0; i < boton_agregar_al_carrito.length; i++) {
  boton_agregar_al_carrito[i].addEventListener("click", function () {
    console.log("shiii funssssioooonaaaaa! 3");

    /*
    console.log("value = " + $(this).attr(value));
    console.log("id = " + $(this).attr(id));

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
