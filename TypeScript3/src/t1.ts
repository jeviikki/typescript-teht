interface User {
  id: number;
  name: string;
  email: string;
}

type BasicUser = Partial<User>;

// Example usage (valid)
const userWithoutEmail: BasicUser = { id: 1, name: 'John' };

// Example usage (invalid)
const userWithEmail: BasicUser = { id: 2, name: 'Alice', email: 'alice@example.com' };

