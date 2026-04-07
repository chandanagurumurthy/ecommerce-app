let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fetch products
fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("product-list");

    data.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      `;
      container.appendChild(div);
    });
  });

// Add to cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " added to cart 🛒");
}