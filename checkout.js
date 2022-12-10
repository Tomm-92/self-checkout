/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { catalogue } = require("./data/data");

const scanBarcode = (barcode) => {
   console.log('barcode', barcode);
    console.log('catalogue', catalogue);
    return catalogue.find(item => {
    console.log('find output', item.barcode === barcode)
    return item.barcode === barcode;
}); 
   /* const filteredItems = catalogue.filter((item) => {
    console.log('inside filter', item.barcode === barcode)
    return item.barcode === barcode;
    });
    console.log ('filter', filteredItems[0]);
    return filteredItems[0];
 
There are 2 options for the first challenge - use find or filter. The find item is better as it returns the
object which is the name of the fruit. The filter returns an array of the object instead
The filteredItems [0] is what is making the test work for filter as it returns an object without the array */

};

/* adding an item to the basket is the the equivalent of adding to an array
therefore need to define an empty array to add the items too */


const basket = [];
const addItem = (itemToAdd) => {
return basket.push(itemToAdd); 
};

const sumPrice = (prices) => {
const totalPrice = basket.reduce(acc, price) => [
return acc + price.price;
]
}





module.exports = { scanBarcode, addItem, basket, sumPrice };
