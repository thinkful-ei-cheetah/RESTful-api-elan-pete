/* global shoppingList, store, Item, $, api */
/* eslint-disable strict */
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});




// api.getItems()
//   .then(res => res.json())
//   .then(resJson => console.log(resJson));
// testgetItems promises

// api.createItem('cheese')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });
// create item test