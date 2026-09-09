"use strict";
const user1 = {
    username: "NormalPerson",
    email: "normaladdress@email.com",
    bio: "I am just a normal guy."
};
const user2 = {
    username: "ineednointroduction",
    email: "mysteriousperson@email.com",
};
// Function to display user information
function displayUserInfo(user) {
    console.log(user.username);
    console.log(user.email);
    console.log(user.bio);
}
// Display user information
displayUserInfo(user1);
console.log(" ");
displayUserInfo(user2);
