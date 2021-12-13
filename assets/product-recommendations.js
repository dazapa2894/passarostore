//console.log("product-recommendations.js");

class ProductRecommendations extends HTMLElement {
  constructor() {
    super();

    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(this);

      console.log(this);

      fetch(this.dataset.url)
        .then(response => response.text())
        .then(text => {
          const html = document.createElement('div');
          html.innerHTML = text;
          const recommendations = html.querySelector('product-recommendations');
          console.log(recommendations);
          if (recommendations && recommendations.innerHTML.trim().length) {
            this.innerHTML = recommendations.innerHTML;
          }

          
          // // agrego el evento para mostrar el cuadro de tallas
          // $(".show-variant").off('click').on('click', function () {
          //   Show_variant(this)
          // });

          // // agrego el evento de cambiar la talla de la compra
          // $(".size-picker").off('click').on('click', function () {
          //   ChangeSize(this);
          // });


          // //agrego el evento de agregar al carrito
          // $(".agregar-al-carrito").off('click').on('click', function () {
          //   AddProduct(this);
          // });


        })
        .catch(e => {
          console.error(e);
        });
    }

    new IntersectionObserver(handleIntersection.bind(this), {
      rootMargin: '0px 0px 200px 0px'
    }).observe(this);
    
  }
}

customElements.define('product-recommendations', ProductRecommendations);

