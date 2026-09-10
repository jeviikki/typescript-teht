// Example usage of the UserDictionary (valid)
const users = {
    user1: { name: 'Alice', age: 30 },
    user2: { name: 'Bob', age: 25 },
    user3: { name: 'Charlie', age: 35 },
};
// Access a user by key
const alice = users.user1;
// Example usage (invalid)
const invalidUsers = {
    user4: { name: 'David', age: 'unknown' },
};
export {};
