const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1000 },
  { item: "Keyboard", price: 2000 }
];

const total = cart.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(`Total Amount: ₹${total}`);