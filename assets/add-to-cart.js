console.log("holi2???");


$(".agregar").click(function () {

  console.log("mostrame algo care nalga");

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
});