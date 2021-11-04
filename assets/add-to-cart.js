const size_picker = document.querySelectorAll(".size-picker");
const show_variant = document.querySelectorAll(".show-variant");
const agregar_al_carrito = document.querySelectorAll(".agregar-al-carrito");

console.log($(".variant-color-swatch"));
$(".variant-color-swatch").click( function() {
    let variant_color = $(this).attr("variant_color");
    let variant_img_src = $(this).attr("variant_img_src");
   
    // console.info("swatch clicked");
    // console.info($(this));
    // console.log("variant_color = " + variant_color);
    // console.log("variant_img_src = " + variant_img_src);
    
    $(this).each(function() {
      $(this).removeClass('active');
    });

    $(this).addClass('active');
    $(this).parent().prev().find(".product-img").attr("src", variant_img_src);
    $(this).parent().parent().attr("variant_color", variant_color);
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
  
  console.log(show_variant_element);

  show_variant_element.addEventListener("click", function () {
    console.log("+ clicked");
    console.log(show_variant_element);
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
  
    // console.log("agregar al carrito");
    
    let data_container_element = agregar_al_carrito_element.parentElement.parentElement.parentElement;
    let variant_size = data_container_element.getAttribute("variant_size");
    
    let the_select_element = agregar_al_carrito_element.parentElement.querySelector("select");
    
    let variant_id =  SetSelect(the_select_element, variant_size);
    
    
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
        console.log("response1");
        console.log(response);

        if (response.items.length > 0) {
          console.log("MOSTRAR LA INFO DE LA CART CON OTRO FECTH");
          fetch('/cart.js', {
              method: 'GET'
            })
            .then(res2 => {
              json = res2.json();
              return json;
            }).then(response2 => {
              // agrego notificación de item agregado al carrito
              

              let items_en_el_carrito = response2.item_count;

              let items = response2.items;
              let product_id = response2.items[0].product_id;
              let variant_id = response2.items[0].id;
              let variant_img = response2.items[0].image;
              let variant_url = response2.items[0].url;
              let product_title = response2.items[0].product_title;
              let variant_options = response2.items[0].variant_options;
              let options_with_values = response2.items[0].options_with_values;
              

              let cart_icon_bubble = '<div id=\"shopify-section-cart-icon-bubble\" class=\"shopify-section\"><svg class=\"icon icon-cart\" aria-hidden=\"true\" focusable=\"false\" role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" fill=\"none\">\n  <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z\"/>\n</svg>\n<span class=\"visually-hidden\">Carrito</span><div class=\"cart-count-bubble\"><span aria-hidden=\"true\">' + items_en_el_carrito + '</span><span class=\"visually-hidden\">' + items_en_el_carrito + ' artículos</span>\n  </div></div>';
              let cart_notification_button = '<div id="shopify-section-cart-notification-button" class="shopify-section">Ver mi carrito (' + items_en_el_carrito + ')</div>';

              let inicio_cart_notification_product = "<div id=\"shopify-section-cart-notification-product\" class=\"shopify-section\">";
              let content_cart_notification_product = "";

              items.forEach(item => {
                console.info(item);
                console.info(item.id);
                content_cart_notification_product += 
                  "<div id=\"cart-notification-product-" + item.id + "\">\n\n"+
                  "<img class=\"cart-notification-product__image\"\nsrc=\"" + item.image + "\"\nalt=\"" + item.product_title + "\"\nwidth=\"70\"\nheight=\"91\"\nloading=\"lazy\"\n>\n\n" +
                  "<div class=\"cart-notification-product__info\">\n<h3 class=\"cart-notification-product__name h4\">" + item.product_title + "</h3>";

                item.options_with_values.forEach(option => {
                  content_cart_notification_product += 
                    "<dl>"+
                      "<div class=\"cart-notification-product__option h4\">\n" +
                        "<dt>" + option.name + ": </dt>\n" +
                        "<dd>" + option.value + "</dd>\n" +
                      "</div>"+
                    "</dl>";
                });

                content_cart_notification_product += "</div>\n</div>";
              }); 
              let final_cart_notification_product = "</div>";

              let cart_notification_product = inicio_cart_notification_product + content_cart_notification_product + final_cart_notification_product;
              console.info(cart_notification_product);

              let notification_obj = {
                "cart-icon-bubble": cart_icon_bubble,
                "cart-notification-button": cart_notification_button,
                "cart-notification-product": cart_notification_product,
              };

              response2.items[0].sections = notification_obj;
              console.info("response2");
              console.info(response2.items[0].sections);
              // document.querySelector(".cart-count-bubble").firstElementChild.innerText = items_en_el_carrito;
              // navConfirm("Articulo agregado.\n¿Deseas continuar al carrito de compras?", "/cart");
              

              // para mostrar el 
              document.querySelector('cart-notification').renderContents(response2.items[0]);
            })
            
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          console.log('Respuesta de red OK pero respuesta HTTP no OK');
        }
      });
  });
});

function navConfirm(message, loc) {
  if (confirm(message)) {
    window.location.href = loc;
  }
  return false; // cancel the click event always
}

function SetSelect(selectElement, talla) {
  // console.log("$(selectElement)");
  // console.log($(selectElement));
  let option = $(selectElement).find("[variant='" + talla + "']");
  let new_value = $(option).attr("value");
  // console.log("[variant='" + talla + "']");
  // console.log(option);
  // console.log(new_value);
  selectElement.value = new_value;
  return new_value;
}

