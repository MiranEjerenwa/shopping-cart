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
    itemCategory: 'Electronics'
}
]





















//create for loop that goes through array of item details

for (let i = 0; i < itemDetails.length; i++) {
    console.log('hit for loop');
    let newListItem = `<li class='addToCart details'>${itemDetails[i].itemName}</li>`
    console.log(itemDetails[i].itemCategory,  $(`.${itemDetails[i].itemCategory}`));
    $(`.${itemDetails[i].itemCategory}`).append(newListItem);
}

  const enterCart = document.querySelectorAll('.addToCart');
  console.log('enterCart', enterCart);
  // wrap the below code in a for loop that iterates for the length of enterCart
  
  enterCart.addEventListener('click', function() {
    for (let i = 0; i < enterCart.length; i++)
    $('.addToCart').on('click', function () {
        console.log('hello');
    
    })
      enterCart.classList.toggle('active');
     
  });
//  
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