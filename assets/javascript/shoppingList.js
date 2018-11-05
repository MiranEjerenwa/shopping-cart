const itemDetails = [{
    itemName: 'Gold Ring',
    itemDescription: 'Engagement ring 14k gold',
    itemPrice: '$900',
    itemCategory: 'beautySupply'
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
    $('.addToCart').on('click', function () {
        console.log('hello');
    
    })
      enterCart.classList.toggle('active');
     
  });
//  
// $('.newList').append(newListItem);


const view = function () {
    hideAll();
    let liDetails = '';
    for (let i = 0; i < itemDetails.length; i++) {
        liDetails += `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${itemDetails[i].itemName} 
    <section>${itemDetails[i].itemDescription}</section> 
    <section>${itemDetails[i].itemPrice}</section>
    <section>${itemDetails[i].itenCategory}</section> </div>`;
    }
    $('.dropdown1').html(liDetails);
    $('.dropdown1').render();
}