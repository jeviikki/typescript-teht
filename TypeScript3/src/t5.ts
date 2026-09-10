export default
interface User {
  name: string;
  age: number;
}

type UserDictionary = Record<string | number, User>;

// Example usage of the UserDictionary (valid)
const users: UserDictionary = {
  user1: { name: 'Alice', age: 30 },
  user2: { name: 'Bob', age: 25 },
  user3: { name: 'Charlie', age: 35 },
};

// Access a user by key
const alice: User = users.user1;

// Example usage (invalid)
const invalidUsers: UserDictionary = {
  user4: { name: 'David', age: 'unknown' },
};
