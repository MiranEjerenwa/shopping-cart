// user will be presented with a list of items on the left as well as a shopping cart on the right.
// How the list looks, already filtered by category
const coll = document.querySelectorAll('.collapsibleList');
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

//create for loop that goes through array of item details

for (let i = 0; i < itemDetails.length; i++) {
    console.log('hit for loop');
    let newListItem = `<li class='addToCart details'>${itemDetails[i].itemName}</li>`
    console.log(itemDetails[i].itemCategory,  $(`.${itemDetails[i].itemCategory}`));
    $(`.${itemDetails[i].itemCategory}`).append(newListItem);
}

// user selects an item from the left, it will be added and updated to the shopping cart.
// let items enter cart on click

$('.details').on('click', function () {
  // $(this) // selected item
  const element = $(this).html();


// user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added.
  // validation
let inCart = false;
if (inCart === false) {
  $('.shoppingCart').append(`<p class='shopping-cart__item'><button class="styled">${element}</button></p>`);
}
else {
  alert('Item already exists in your cart');
inCart = true;
}
}); // selector

// user will be able to click items to remove it from their shopping cart.
// Event Delegation
$(document).on('click', '.shopping-cart__item', function() {
  $(this).remove(); // remove element
  // console.log('Element: ',  $(this).html());
}); // selector

// User will be able to clear cart

// $('.clearCart').on('click', function() {
//   // document.querySelectorAll('.shoppingCart').empty();
//   $('.shoppingCart').detach('.shopping-cart__item');
// });
$(document).on('click', '.clearCart', function() {
  $('.shopping-cart__item').remove();
});