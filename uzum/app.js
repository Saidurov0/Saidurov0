var quantity = 1;
var maxQuantity = 45; 
var initialPrice = 12000;
var quantityInput = document.getElementById('quantity');
var priceDisplay = document.getElementById('price');
document.getElementById('increase').addEventListener('click', function() {
  if (quantity < maxQuantity) {
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
  }
});
document.getElementById('decrease').addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
    updatePrice();
  }
});
function updatePrice() {
  var newPrice = initialPrice * quantity;
  priceDisplay.textContent = newPrice.toLocaleString() + "";
}
