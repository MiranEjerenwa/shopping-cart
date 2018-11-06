const itemDetails = [{
    itemName: 'Gold Ring',
    itemDescription: 'Engagement ring 14k gold',
    itemPrice: '$900',
    itemCategory: 'beautySupply'
},
{
    itemName: 'Lip Gloss',
    itemDescription: 'Ed Lip glossy strawberry',
    itemPrice: '$20',
    itemCategory: 'beautySupply'
},
{
    itemName: 'Foundation',
    itemDescription: 'E28',
    itemPrice: '$30',
    itemCategory: 'beautySupply'
},
{
    itemName: 'Mascara',
    itemDescription: 'Brown water base',
    itemPrice: '$38.99',
    itemCategory: 'beautySupply'
},
{
    itemName: 'Pefume',
    itemDescription: 'EU de globe',
    itemPrice: '$305',
    itemCategory: 'beautySupply'
},
{
    itemName: 'Lawn Mower',
    itemDescription: 'Dow ultimate 350K',
    itemPrice: '$1200',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Jack',
    itemDescription: 'car jack',
    itemPrice: '$125',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Towels',
    itemDescription: 'His and Hers professional embroided towels',
    itemPrice: '$60',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Candles',
    itemDescription: '2Packs fall candles',
    itemPrice: '$25',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Air Freshner',
    itemDescription: 'Keep alive dove',
    itemPrice: '$20',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Carpet',
    itemDescription: '3yards luxurious bunch',
    itemPrice: '$900',
    itemCategory: 'homeGoods'
},
{
    itemName: 'Hand Gun',
    itemDescription: '19m Glock, gold plate',
    itemPrice: '$1325',
    itemCategory: 'homeGoods'
},
{
    itemName: 'iphone x',
    itemDescription: `Apple's new way of making money`,
    itemPrice: '$1400',
    itemCategory: 'electronics'
},
{
    itemName: 'Ps4x',
    itemDescription: `play away your life`,
    itemPrice: '$560',
    itemCategory: 'electronics'
},
{
    itemName: 'HP Laptop',
    itemDescription: `cyan ultra slim`,
    itemPrice: '$1200',
    itemCategory: 'electronics'
},
{
    itemName: 'Dell Monitor',
    itemDescription: `19 display hd`,
    itemPrice: '$89.99',
    itemCategory: 'electronics'
},
{
    itemName: 'Alarm system x',
    itemDescription: `Never get a break in again`,
    itemPrice: '$1400',
    itemCategory: 'electronics'
},
{
    itemName: 'Universal remote control',
    itemDescription: `Sync all your devices`,
    itemPrice: '$600',
    itemCategory: 'electronics'
},
{
    itemName: 'Samsung Camera',
    itemDescription: `1200 pixels, all in one. Edit and print`,
    itemPrice: '$950',
    itemCategory: 'electronics'
},
{
    itemName: 'Dish Washer',
    itemDescription: `GE twin compartment`,
    itemPrice: '$1800',
    itemCategory: 'electronics'
},
{
    itemName: 'Roku TV',
    itemDescription: `Best Free TV solution - all in one`,
    itemPrice: '$100',
    itemCategory: 'electronics'
},
{
    itemName: 'DVD Player',
    itemDescription: `HD`,
    itemPrice: '$400',
    itemCategory: 'electronics'
}
]

// // user will be presented with a list of items on the left as well as a shopping cart on the right.
// // How the list looks
// const coll = document.querySelectorAll('.collapsibleList');
// var i;
// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }

// //create for loop that goes through array of item details

// for (let i = 0; i < itemDetails.length; i++) {
//     console.log('hit for loop');
//     let newListItem = `<li class='addToCart details'>${itemDetails[i].itemName}</li>`
//     console.log(itemDetails[i].itemCategory,  $(`.${itemDetails[i].itemCategory}`));
//     $(`.${itemDetails[i].itemCategory}`).append(newListItem);
// }

// // user selects an item from the left, it will be added and updated to the shopping cart.
// // let items enter cart on click
//   const enterCart = document.querySelectorAll('.addToCart');
//   console.log('enterCart', enterCart);

// wrap the below code in a for loop that iterates for the length of enterCart
// for (let i = 0; i < enterCart.length; i++) {
//     let selectItem = $('.shoppingCart').append(enterCart);
//     console.log('hit second loop');
//     $('.addToCart').on('click', selectItem);
// }


// user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added.
// user will be able to click items to remove it from their shopping cart.
// user is able to filter the list of all items by category.



//   enterCart.addEventListener('click', function() {
//     {
//     }
//     $('.addToCart').on('click', function () {
//         console.log('hello');
//     })
//       enterCart.classList.toggle('active');
//   });
// $('.newList').append(newListItem);
// const view = function () {
//     hideAll();
//     let liDetails = '';
//     for (let i = 0; i < itemDetails.length; i++) {
//         liDetails += `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${itemDetails[i].itemName} 
//     <section>${itemDetails[i].itemDescription}</section> 
//     <section>${itemDetails[i].itemPrice}</section>
//     <section>${itemDetails[i].itenCategory}</section> </div>`;
//     }
//     $('.dropdown1').html(liDetails);
//     $('.dropdown1').render();
// }