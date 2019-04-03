/* global shoppingList, store, Item, $ */
/* eslint-disable strict */
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// fetch('https://thinkful-list-api.herokuapp.com/elan-pete/items')
//   .then(res => res.json())
//   .then(data => console.log(data));
//test fetch for api

