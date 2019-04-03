/* global shoppingList, store, Item, $, api */
/* eslint-disable strict */
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[0];
  //     return api.updateItem(item.id, {name: 'foobar'});
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!'));
 // #test for api.updateItem

    api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'kungfoo' });
      // console.log('new name: ' + item.name);
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