type Profile = {
    username?: string,
    email?: string,
    age?: number
}

type UserProfile = Required<Profile>;

// Example usage (valid)
const user: UserProfile = { username: 'alice', email: 'alice@example.com', age: 25 };

// Example usage (invalid)
const incompleteUser: UserProfile = { username: 'bob' };
