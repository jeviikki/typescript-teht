//export {}; // hack to ignore Book from task 3
// TODO Define the 'ElectronicDevice' type (or interface)
interface ElectronicDevice {
    brand: string,
    model: string,
    type: string,
}
// Define the 'Book' type (or interface)
interface Book {
    title: string,
    author: string,
    type: string,
}
// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = {
    type: string,
    device: ElectronicDevice,
    book: Book,
}

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {

    const deviceBrand : string = String(prompt("Enter device brand"));
    const deviceModel : string = String(prompt("Enter device model"));

    const device: ElectronicDevice = {
        brand: deviceBrand,
        model: deviceModel,
        type: "electronic",
    }

    return device
}

function createBook(): Book {

    const bookTitle : string = String(prompt("Enter book title"));
    const bookAuthor : string = String(prompt("Enter book author"));

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
