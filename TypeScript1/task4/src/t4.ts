//export {}; // hack to ignore Book from task 3

interface ElectronicDevice {
    brand: string,
    model: string,
    type: string,
}

interface Book {
    title: string,
    author: string,
    type: string,
}

type Product = {
    type: string,
    brand?: any,
    model?: any,
    title?: any,
    author?: any,
}

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {

    const deviceBrand = String(prompt("Enter device brand"));
    const deviceModel = String(prompt("Enter device model"));

    const device: ElectronicDevice = {
        brand: deviceBrand,
        model: deviceModel,
        type: "electronic",
    }

    return device
}

function createBook(): Book {

    const bookTitle = String(prompt("Enter book title"));
    const bookAuthor = String(prompt("Enter book author"));

    const book : Book = {
        title: bookTitle,
        author: bookAuthor,
        type: "book",
    }

    return book
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    } else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
