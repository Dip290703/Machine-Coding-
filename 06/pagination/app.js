document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products) {
        products = data.products;
        console.log(products);
        render();
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const render = () => {
    app.innerHTML = "";
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");
    if (products.length > 0) {
      products.slice((page - 1) * 10, page * 10).forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("products__single");
        productElement.innerHTML = `
            <img src = "${product.thumbnail}" alt = "${product.title}"/>
            <span>${product.title}</span>
            `;
        productsContainer.appendChild(productElement);
      });

      app.appendChild(productsContainer);
    }
  };
  fetchProducts();
});
