const color_swatches = document.querySelectorAll(".variant-color-swatch");
const size_picker = document.querySelectorAll(".size-picker");
const show_variant = document.querySelectorAll(".show-variant");
const agregar_al_carrito = document.querySelectorAll(".agregar-al-carrito");

color_swatches.forEach(swatch_element => {
  // console.info(swatch_element);
  swatch_element.addEventListener("click", function () {
    let variant_color = swatch_element.getAttribute("variant_color");
    let variant_img_src = swatch_element.getAttribute("variant_img_src");
    // console.info("variant_color = " + variant_color);
    // console.info("variant_img_src = " + variant_img_src);
    color_swatches.forEach(element => {element.classList.remove('active');});
    swatch_element.classList.add('active');
    swatch_element.parentElement.previousElementSibling.querySelector(".product-img").setAttribute("src", variant_img_src);
    swatch_element.parentElement.parentElement.setAttribute("variant_color", variant_color);
  });
});

size_picker.forEach(size_picker_element => {
  // console.info(size_picker_element);
  size_picker_element.addEventListener("click", function () {
    let variant_size = size_picker_element.getAttribute("variant_size");
    // console.info("variant_size = " + variant_size);
    size_picker.forEach(element => {element.classList.remove('active');});
    size_picker_element.classList.add('active');
    size_picker_element.parentElement.parentElement.parentElement.parentElement.setAttribute("variant_size", variant_size);
  });
});

show_variant.forEach(show_variant_element => {
  // console.info(show_variant_element);
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
  // console.info(agregar_al_carrito_element);
  agregar_al_carrito_element.addEventListener("click", function () {
  
    // console.info("agregar al carrito");
    
    let data_container_element = agregar_al_carrito_element.parentElement.parentElement.parentElement;
    let variant_size = data_container_element.getAttribute("variant_size");
    let variant_color = data_container_element.getAttribute("variant_color");
    
    let the_select_element = agregar_al_carrito_element.parentElement.querySelector("select");
    
    let variant_id =  SetSelect(the_select_element, variant_color, variant_size);
    
    
    console.info("variant_id = " + variant_id);
    
    let formData = {
      'items': [{
        'id': variant_id,
        'quantity': 1
      }]
    };

    const body = JSON.stringify({
      'items': [{
        'id': variant_id,
        'quantity': 1
      }],
      sections: document.querySelector('cart-notification').getSectionsToRender().map((section) => section.id),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_add_url}`, {
        ...fetchConfig(),
        body
      })
      .then((response) => {
        console.info(response);
        console.info(response.json());
        response.json()
      })
      .then((parsedState) => {
        console.info("PARSED STATE");
        console.info(parsedState);
        document.querySelector('cart-notification').renderContents(parsedState);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        //submitButton.classList.remove('loading');
        //submitButton.removeAttribute('disabled');
      });
    
    /*
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
        console.info(response);

        if (response.items.length > 0) {
          console.info("MOSTRAR LA INFO DE LA CART CON OTRO FECTH");
          fetch('/cart.js', {
              method: 'GET'
            })
            .then(res => {
              json = res.json();
              return json;
            }).then(response => {
              // agrego notificación de item agregado al carrito
              console.info("response");
              console.info(response);

              let items_en_el_carrito = response.item_count;

              let items = response.items;
              let product_id = response.items[0].product_id;
              let variant_id = response.items[0].id;
              let variant_img = response.items[0].image;
              let variant_url = response.items[0].url;
              let product_title = response.items[0].product_title;
              let variant_options = response.items[0].variant_options;
              let options_with_values = response.items[0].options_with_values;
              

              const cart_icon_bubble = '<div id=\"shopify-section-cart-icon-bubble\" class=\"shopify-section\"><svg class=\"icon icon-cart\" aria-hidden=\"true\" focusable=\"false\" role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" fill=\"none\">\n  <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z\"/>\n</svg>\n<span class=\"visually-hidden\">Carrito</span><div class=\"cart-count-bubble\"><span aria-hidden=\"true\">' + items_en_el_carrito + '</span><span class=\"visually-hidden\">' + items_en_el_carrito + ' artículos</span>\n  </div></div>';
              const cart_notification_button = '<div id="shopify-section-cart-notification-button" class="shopify-section">Ver mi carrito (' + items_en_el_carrito + ')</div>';

              let inicio_cart_notification_product = '<div id=\"shopify-section-cart-notification-product\" class=\"shopify-section\">';
              let content_cart_notification_product = '';

              items.forEach(item => {
                content_cart_notification_product += 
                  '<div id=\"cart-notification-product-' + item.id + '\">\n\n'+
                  '<img class=\"cart-notification-product__image\"\nsrc=\"' + item.src + '\"\nalt=\"' + item.product_title + '\"\nwidth=\"70\"\nheight=\"70\"\nloading=\"lazy\"\n>\n\n'+
                  '<div class=\"cart-notification-product__info\">\n<h3 class=\"cart-notification-product__name h4\">' + item.product_title + '</h3>';

                item.options_with_values.forEach(option => {
                  content_cart_notification_product += 
                    '<dl>'+
                      '<div class=\"cart-notification-product__option h4\">\n' +
                        '<dt>' + option.name + ': </dt>\n' +
                        '<dd>' + option.value + '</dd>\n' +
                      '</div>'+
                    '</dl>';
                });

                content_cart_notification_product += '</div>\n</div>';
              }); 
              let final_cart_notification_product = '</div>';

              const cart_notification_product = inicio_cart_notification_product + content_cart_notification_product + final_cart_notification_product;

              const notification_obj = {
                "cart-icon-bubble": cart_icon_bubble,
                "cart-notification-button": cart_notification_button,
                "cart-notification-product": cart_notification_product,
              };

              response.sections = notification_obj;
              // document.querySelector(".cart-count-bubble").firstElementChild.innerText = items_en_el_carrito;
              // navConfirm("Articulo agregado.\n¿Deseas continuar al carrito de compras?", "/cart");
              

              // para mostrar el 
              document.querySelector('cart-notification').renderContents(response);
            })
            
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          console.info('Respuesta de red OK pero respuesta HTTP no OK');
        }
      });
      */
  
  });// FIN CLICK
});

function navConfirm(message, loc) {
  if (confirm(message)) {
    window.location.href = loc;
  }
  return false; // cancel the click event always
}

function SetSelect(selectElement, color, talla) {
  // console.info("$(selectElement)");
  // console.info($(selectElement));
  let option = $(selectElement).find("[variant='" + color + " / " + talla + "']");
  let new_value = $(option).attr("value");
  // console.info("[variant='" + color + " / " + talla + "']");
  // console.info(option);
  // console.info(new_value);
  selectElement.value = new_value;
  return new_value;
}

