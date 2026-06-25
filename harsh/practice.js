function greet(name) {
  return `Hello, ${name}!`;
}

function double(n) {
  return n * 2;
}

function isEmpty(str) {
  return str.length === 0;
}

// greet("Harsh"); runs, but you see nothing - return value is ignored
console.log(greet("Harsh"));
console.log(greet("Vaibhav"));
// Output: Hello, Harsh!
// Output: Hello, Vaibhav!

console.log(double(5));
// Output: 10

console.log(isEmpty(""));
// Output: true
console.log(isEmpty("y2k"));
// Output: false