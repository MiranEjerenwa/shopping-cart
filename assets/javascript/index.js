  // const enterCart = document.querySelectorAll('#addToCart');
  // console.log('enterCart', enterCart);
  // enterCart.addEventListener('click', function() {
  //   $('#addToCart').on('click', function () {
  //       console.log('hello');
    
  //   })
  //     enterCart.classList.toggle('active');
     
  // });

// const displayItems1 = function () {
//     hideAll();
//     $('.dropdown').render();
// }
    
// $('.dropdown').on('click',displayItems1);
// $('.details').on('click',view);
// user selects an item from the left, it will be added and updated to the shopping cart.
// user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added.
// user will be able to click items to remove it from their shopping cart.
// user is able to filter the list of all items by category.
// 
// user will be presented with a list of items on the left as well as a shopping cart on the right.
// How the list looks
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
  // const enterCart = document.querySelectorAll('.addToCart');
  // console.log('enterCart', enterCart);

$('.details').on('click', function () {
  // $(this) // selected item
  const element = $(this).html();

  // validation
  $('.shoppingCart').append(`<p class='shopping-cart__item'>${element}</p>`);

}); // selector

// Event Delegation
$(document).on('click', '.shopping-cart__item', function() {
  $(this).remove(); // remove element
  // console.log('Element: ',  $(this).html());
}); // selector