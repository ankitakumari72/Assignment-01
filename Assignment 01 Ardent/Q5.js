const orderStatus = "Shipped";

switch (orderStatus) {
    case "Pending":
        console.log("Order is Pending");
        break;
    case "Processing":
        console.log("Order is Processing");
        break;
    case "Shipped":
        console.log("Order has been Shipped");
        break;
    case "Delivered":
        console.log("Order Delivered");
        break;
    default:
        console.log("Invalid Status");
}