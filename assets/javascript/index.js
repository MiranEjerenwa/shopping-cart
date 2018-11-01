// How the list looks
CollapsibleLists.applyTo(document.querySelectorAll('#collapsibleList'));

// landing page

const displayItems1 = function () {
    hideAll();
    $('.dropdown1').render();
}
    
$('.dropdown1').on('click',displayItems1);
$('.details').on('click',view);
// user will be presented with a list of items on the left as well as a shopping cart on the right.
// user selects an item from the left, it will be added and updated to the shopping cart.
// user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added.
// user will be able to click items to remove it from their shopping cart.
// user is able to filter the list of all items by category.
// 