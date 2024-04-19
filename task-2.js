function getShippingMessage(country, price, deliveryFee) {
  return (totalPrice = price + deliveryFee);
  console.log(`Shipping to ${country} will cost ${totalPrice} credits!`);
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);

// Mimo oglądania lekcji i czytania konspektu nadal nie wiem jak to zrobić i potrzebuję żeby ktoś mi to logicznie wytłumaczył.
// Nie wiem jak zapisać obliczenie dla totalPrice, siedziałam nad tym kilka dni i nie wiem.
