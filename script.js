// Function to calculate the nth term of the Fibonacci sequence
function fibonacci(n) {
  if (n <= 0) {
    return "Invalid input. Please provide a positive integer.";
  }

  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage
const termNumber = 8;
const result = fibonacci(termNumber);
console.log(`The ${termNumber}th term of the Fibonacci sequence is: ${result}`);
