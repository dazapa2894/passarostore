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

          console.log(".show-variant 2");
          console.log($(".show-variant"));
          $(".show-variant").click(function () {
            console.log("+ clicked");
            console.log($(this));
            $(this).next().toggleClass('hide');
            if ($(this).html() == "+") {
              $(this).html("-");
            } else if ($(this).html() == "-") {
              $(this).html("+");
            }
          });

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

