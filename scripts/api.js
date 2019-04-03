/* eslint-disable indent */
/* eslint-disable strict */


const api = (function () {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/elan-pete';

    function getItems(){
        return fetch(`${BASE_URL}/items`);

        // return Promise.resolve('A successful response!');
    }
    function createItem(name) {
        let newItem = {
            name
        };
        const jsonItem = JSON.stringify(newItem);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonItem
        };
        return fetch(`${BASE_URL}/items`, options);   
    }

    function updateItem(id, updateData){
        const dataString = JSON.stringify(updateData);
        const options = {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: dataString
        }
        return fetch(`${BASE_URL}/items/${id}`,options);

    }


    return {
        // BASE_URL,
        getItems,
        createItem,
        updateItem
    };
}());


