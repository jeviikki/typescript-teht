interface MathFunction {
  (a: number, b: number): number;
}

type MathArgs = Parameters<MathFunction>;

// Example usage (valid)
const mathArgs: MathArgs = [5, 10];

// Example usage (invalid)
const invalidMathArgs: MathArgs = [5, 'invalid'];
