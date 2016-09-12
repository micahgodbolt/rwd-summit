var calcShipping = function(size, quantity) {
  if (size == 3) {
    return size * quantity;
  }
  else {
    return size * (quantity > 100 ? 100 : quantity);
  }
}

$("#buy-now").on('click', function() {
  var purchase = {};

  purchase.size = $("#size-select").val();
  purchase.quantity = $("#quantity-select").val();
  document.cookie = "size=" + purchase.size;
  document.cookie = "quantity=" + purchase.quantity;
});
