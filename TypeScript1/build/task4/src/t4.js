"use strict";
//export {}; // hack to ignore Book from task 3
// Implement instances of the 'Product' type
function createElectronicDevice() {
    const deviceBrand = String(prompt("Enter device brand"));
    const deviceModel = String(prompt("Enter device model"));
    const device = {
        brand: deviceBrand,
        model: deviceModel,
        type: "electronic",
    };
    return device;
}
function createBook() {
    const bookTitle = String(prompt("Enter book title"));
    const bookAuthor = String(prompt("Enter book author"));
    const book = {
        title: bookTitle,
        author: bookAuthor,
        type: "book",
    };
    return book;
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
