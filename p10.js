const items = [
  { quantity: 3, price: 10 },
  { quantity: 2, price: 20 },
  { quantity: 1, price: 30 },
  { quantity: 5, price: 15 },
];

function calculateTotalValue(itemsArray) {
  return itemsArray.reduce((sum, item) => {
    return (sum += item.quantity * item.price);
  }, 0);
}

const totalValue = calculateTotalValue(items);
console.log("Total value:", totalValue);
