const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

const productCards = products.map(product => `
  <div class="card">
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
  </div>
`);

console.log(productCards);