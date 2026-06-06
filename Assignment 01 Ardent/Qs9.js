function calculateTicketPrice(ticketPrice, quantity) {
    let total = ticketPrice * quantity;

    if (total > 1000) {
        total = total - (total * 10 / 100);
    }

    return total;
}

console.log(calculateTicketPrice(200, 6));