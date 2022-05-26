# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: An argument is a value plugged into a function when it is invoked. A parameter is a dynamic value that is built into a function.

  Researched answer:
  A parameter is a placeholder for a value within a function.
  An argument is the actual value that will take the place of the parameter to execute the function.

  Functions will have a parameter inside of it. When the function is invoked an actual value, an argument, is given and it will take the place of the parameter.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: 
  The predefined parameters for .map() are value, index, and array. Value is required, while index and array are optional.

  Researched answer: 
  I remembered from class that value was required, but I was not sure why index and array were optional. The parameters for .map() are value, index, and array in that exact order. If you want to use the index or array in a function, your parameter must include the parameters before it.



3. What is the difference between map and filter?

  Your answer:
  .map() takes an array and iterates over each element returning an array with an equal number of elements.
  .filter() takes an array, iterates over each element, and returns the elements that meet a true Boolean statement to an array typically smaller than the input array.

  Researched answer:
  My answer was correct, but there are some common mistakes that can be difficult to debug. 
  .map() without a return statement will return an empty array.
  .filter() without a return statement will return undefined which will be coerced into false. You must also ensure that a return will definitely return a Boolean value.

4. What is the difference between a function and a method?

  Your answer:
  A function is a named set of instructions to perform actions on data.
  A method is a function within a function.

  Researched answer:
  I was completely off-base with method and I don't know where I picked that up from. A method implicitly passes the object on which it is called. Syntax that is a dot type, like .map() or .filter() for example, are methods and they require an object to work on. Functions live on their own and do not append objects.


5. What is object destructuring?

  Your answer:
  Object destructuring is when you take an object, whether it is a string, array, or whatever data type, and break it down to its component parts.

  Researched answer:
  I'll be honest and say I forgot what object destructuring is. I guessed just based on the term name.
  Object destructuring is a syntax introduced in ES6 that allows the assignment of an object to variables using key:value pairs.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
      A new class that takes all the functionality of a parent class and allows the addition of more.
2. React:
      A JavaScript library for creating user interfaces.
3. React state:
      A React object that is a container for data for a React component
4. React lifecycle methods:
      constructor(), render(), componentDidMount(), render(), componentDidUpdate(), componentWillUnmount()
          constructor() - initializes the component
          render()  - display code
          componentDidMount() - invoked after a component is mounted
          render() - display code
          componentDidUpdate() - invoked after component updates
          componentWillUnmount() - invoked immediately before component is unmounted and destroyed
5. DOM:
    Document object model
      A visual representation of React code