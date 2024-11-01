const data = [
    {
      id: 1,
      question: "What is the difference between 'let' and 'var' in JavaScript?",
      answer: "The 'let' keyword allows you to declare variables that are limited in scope to the block, statement, or expression where they are used. 'var', on the other hand, is function-scoped or globally-scoped, depending on where it is declared."
    },
    {
      id: 2,
      question: "How does the 'this' keyword work in JavaScript?",
      answer: "'this' refers to the object that is executing the current function. In a method, 'this' refers to the owner object. In a regular function, 'this' refers to the global object (or undefined in strict mode)."
    },
    {
      id: 3,
      question: "What is a closure in JavaScript?",
      answer: "A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from an outer function even after the outer function has completed execution."
    },
    {
      id: 4,
      question: "What is the purpose of promises in JavaScript?",
      answer: "Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation. They allow you to handle asynchronous code in a more readable and manageable way, avoiding callback hell."
    }
  ];
  
  export default data