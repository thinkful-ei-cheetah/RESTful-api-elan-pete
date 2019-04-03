/* global shoppingList, store, Item, $, api */
/* eslint-disable strict */
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


// api.getItems()
//   .then(res => res.json())
//   .then(resJson => console.log(resJson));
// testgetItems promises
