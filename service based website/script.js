
let basePrice = 20;

const paperSize = document.getElementById('paperSize');
const printType = document.getElementById('printType');
const bindingType = document.getElementById('bindingType');
const priceDisplay = document.getElementById('price');

// Pricing logic
function updatePrice() {
  let price = basePrice;

  // Paper Size
  if (paperSize.value === 'A3') price += 10;
  if (paperSize.value === 'Letter') price += 5;

  // Print Type
  if (printType.value === 'Color') price += 15;

  // Binding Type
  if (bindingType.value === 'Spiral') price += 30;
  if (bindingType.value === 'Hardcover') price += 50;

  // Update the price
  priceDisplay.textContent = price;
}

// Event Listeners
paperSize.addEventListener('change', updatePrice);
printType.addEventListener('change', updatePrice);
bindingType.addEventListener('change', updatePrice);

// Confirm Button Function
function confirmOrder() {
  alert('Order Confirmed! Thank you for choosing PrintEase.');
}
