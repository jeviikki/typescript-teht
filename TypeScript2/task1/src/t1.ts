
interface User {
    username: string,
    email: string,
    bio?: string,
}

const user1: User = {
    username: "NormalPerson",
    email: "normaladdress@email.com",
    bio: "I am just a normal guy."
}

const user2: User = {
    username: "ineednointroduction",
    email: "mysteriousperson@email.com",
}

// Function to display user information
function displayUserInfo(user: User): void {
    console.log(user.username);
    console.log(user.email);
    console.log(user.bio);
}

// Display user information
displayUserInfo(user1);
console.log(" ");
displayUserInfo(user2);
