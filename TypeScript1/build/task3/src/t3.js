function promptForBook() {
    const bookTitle = String(prompt("Enter the book's title"));
    const bookAuthor = String(prompt("Enter the book's author"));
    const bookPublicationYear = Number(prompt("Enter the book's publication year"));
    const book = {
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
export {};
