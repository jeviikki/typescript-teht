interface GreetFunction {
  (): string;
}

type GreetResult = ReturnType<GreetFunction>;

// Example usage (valid)
const greeting: GreetResult = 'Hello, World!';

// Example usage (invalid)
const invalidGreeting: GreetResult = 42;
