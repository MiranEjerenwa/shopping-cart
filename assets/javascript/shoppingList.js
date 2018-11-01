const itemDetails = [{
    itemName: 'Gold Ring',
    itemDescription: 'Engagement ring 14k gold',
    itemPrice: '$900',
    itenCategory: 'Beeauty Supplies'
},
{
    itemName: 'iphone x',
    itemDescription: `Apple's new way of making money`,
    itemPrice: '$1400',
    itenCategory: 'Electronics'
}
]


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