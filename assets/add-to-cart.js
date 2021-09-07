const boton_agregar_al_carrito = document.querySelectorAll(".agregar");
const color_swatches = document.querySelectorAll(".variant-color-swatch");
const size_picker = document.querySelectorAll(".size-picker");
const show_variant = document.querySelectorAll(".show-variant");
const agregar_al_carrito = document.querySelectorAll(".agregar-al-carrito");

color_swatches.forEach(swatch_element => {
  // console.log(swatch_element);
  swatch_element.addEventListener("click", function () {
    let variant_color = swatch_element.getAttribute("variant_color");
    let variant_img_src = swatch_element.getAttribute("variant_img_src");
    // console.log("variant_color = " + variant_color);
    // console.log("variant_img_src = " + variant_img_src);
    color_swatches.forEach(element => {element.classList.remove('active');});
    swatch_element.classList.add('active');
    swatch_element.parentElement.previousElementSibling.querySelector(".product-img").setAttribute("src", variant_img_src);
    swatch_element.parentElement.parentElement.setAttribute("variant_color", variant_color);
  });
});

size_picker.forEach(size_picker_element => {
  // console.log(size_picker_element);
  size_picker_element.addEventListener("click", function () {
    let variant_size = size_picker_element.getAttribute("variant_size");
    // console.log("variant_size = " + variant_size);
    size_picker.forEach(element => {element.classList.remove('active');});
    size_picker_element.classList.add('active');
    size_picker_element.parentElement.parentElement.parentElement.parentElement.setAttribute("variant_size", variant_size);
  });
});

show_variant.forEach(show_variant_element => {
  // console.log(show_variant_element);
  show_variant_element.addEventListener("click", function () {
    show_variant_element.nextElementSibling.classList.toggle('hide');
    if (show_variant_element.innerHTML == "+") {
      show_variant_element.innerHTML = "-";
    } else if (show_variant_element.innerHTML == "-") {
      show_variant_element.innerHTML = "+";
    }
    
  });
});

agregar_al_carrito.forEach(agregar_al_carrito_element => {
  // console.log(agregar_al_carrito_element);
  agregar_al_carrito_element.addEventListener("click", function () {
  
    console.log("agregar al carrito");
    
    let data_container_element = agregar_al_carrito_element.parentElement.parentElement.parentElement;
    let variant_size = data_container_element.getAttribute("variant_size");
    let variant_color = data_container_element.getAttribute("variant_color");
    
    let the_select_element = agregar_al_carrito_element.parentElement.querySelector("select");
    
    let variant_id =  SetSelect(the_select_element, variant_color, variant_size);
    
    
    console.log("variant_id = " + variant_id);
      let formData = {
        'items': [{
          'id': variant_id,
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
      .then(res => {
        return res.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .then(response => {
        // console.log(response);
        if (response.items.length > 0) {
          console.log("MOSTRAR LA INFO DE LA CART CON OTRO FECTH");
          fetch('/cart.js', {
              method: 'GET'
            })
            .then(res => {
              json = res.json();
              console.log("res 1");
              console.log(json);
              console.log(item_count);
              return json;
            })
            .catch((error) => {
              console.error('Error:', error);
            }).then(response => {
              console.log("res 2");
              console.log(response);
            });
        } else {
          console.log('Respuesta de red OK pero respuesta HTTP no OK');
        }
      });
  });
});

function SetSelect(selectElement, color, talla) {
  let option = selectElement.querySelector("[variant='" + color + " / " + talla + "']");
  let new_value = option.getAttribute("value");
  console.log("[variant='" + color + " / " + talla + "']");
  console.log(option);
  console.log(new_value);
  selectElement.value = new_value;
  return new_value;
}

for (let i = 0; i < boton_agregar_al_carrito.length; i++) {
  boton_agregar_al_carrito[i].addEventListener("click", function () {

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
