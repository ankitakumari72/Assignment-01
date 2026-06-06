const productPrice = 500;
const quantity = 3;
const gstRate = 18;

const subtotal = productPrice * quantity;
const gstAmount = subtotal * gstRate / 100;
const finalAmount = subtotal + gstAmount;

console.log("Subtotal:", subtotal);
console.log("GST:", gstAmount);
console.log("Final Amount:", finalAmount);