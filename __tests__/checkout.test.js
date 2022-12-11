/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const { orange, pineapple, kiwi, apple, banana, catalogue } = require("../data/data");
const { scanBarcode, addItem, basket, sumPrice, removeItem } = require("../checkout");

    describe("selfCheckout", () => {
        it('returns the details of an item from the barcode', () => {
            expect(scanBarcode(orange.barcode)).toBe(orange);
        });
        it('returns the details of an item from the barcode', () => {
            expect(scanBarcode(kiwi.barcode)).toBe(kiwi);
        });
})

 describe("addItem", () => {
    it('adds an item to the basket array', () => {
        expect(basket.length).toBe(0)
        addItem(kiwi, basket)
        expect(basket.length).toBe(1)
    });
})
   /* it('returns the details of an item from the barcode', () => {
        expect(addItem(orange)).toBe([orange]);
    }); */

    describe("sumPrice", () => {
        it('returns the total price of all items within the basket', () => {
        expect (sumPrice(basket)).toEqual(25);
        });
        it('returns the total price of all items within the basket', () => {
            addItem(pineapple, basket)
            expect (sumPrice(basket)).toEqual(105);
        });
}) 

describe("removeItem", () => {
    it('removes an item from the basket array', () => {
        expect(basket.length).toBe(2)
        removeItem(kiwi, basket)
        expect(basket.length).toBe(1)
    });
    it('removes an item from the basket array', () => {
        expect(basket.length).toBe(1)
        removeItem(pineapple, basket)
        expect(basket.length).toBe(0)
    });
})