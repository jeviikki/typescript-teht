export {}; // hack to ignore Book from task 4

type Book = {
    title: string,
    author: string,
    publicationYear: number,
}
function promptForBook(): Book {
    const bookTitle : string = String(prompt("Enter the book's title"));
    const bookAuthor : string = String(prompt("Enter the book's author"));
    const bookPublicationYear : number = Number(prompt("Enter the book's publication year"));

    const book: Book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}

const bookDetails = promptForBook();

console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
