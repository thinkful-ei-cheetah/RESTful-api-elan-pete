/* eslint-disable indent */
/* eslint-disable strict */


const api = (function () {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/elan-pete';


    function apiFetch(...args) {
        let error;
        return fetch(...args)
            .then(res => {
                if (!res.ok) {
                    error = { code: res.status };
                }
            return res.json();
            })

            .then(data => {
                if(error) {
                    error.message = data.message;
                    return Promise.reject(error);
                }
            
            return data;
            });
    }

    function getItems(){
        return apiFetch(`${BASE_URL}/items`);
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
        return apiFetch(`${BASE_URL}/items`, options);   
    }

    function updateItem(id, updateData){
        const dataString = JSON.stringify(updateData);
        const options = {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: dataString
        };
        return apiFetch(`${BASE_URL}/items/${id}`,options);

    }

    function deleteItem(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplication/json'
            }
        };
        return apiFetch(`${BASE_URL}/items/${id}`, options);
    }
    


    return {
        // BASE_URL,
        getItems,
        createItem,
        updateItem,
        deleteItem
    };
}());


