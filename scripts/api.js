/* eslint-disable indent */
/* eslint-disable strict */


const api = (function () {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/elan-pete';

    function getItems(){
        return fetch(`${BASE_URL}/items`);

        // return Promise.resolve('A successful response!');
    }
    return {
        // BASE_URL,
        getItems,
    };
}());


