// Day: 4: Components

// Exercises: Level 1

// 1. What is the difference between a regular function and an arrow function?
// Regular functions and arrow functions are two ways to define functions in JavaScript.
// The syntax of both the functions are different from each other:
// Syntax of a regular function:
// function FunctionName() {
        // your code here...
// }
// FunctionName()

// Syntax of an arrow function:
// const FunctionName = () => {
    // your code here...
// }

// . Arrow functions have shorter syntax than regular functions, if the functions only contain one expression, thecurly brackets and return keyword can be skipped.
// . Unlike regular functions, arrow functions do not have their own this keyword. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
// . Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. However, arrow functions are only ‘callable’ and not constructible. An arrow function cannot be called with the new keyword.
/*
Regular functions are defined using the function keyword and have their own this binding, arguments object, and can be used as methods or constructors.
Arrow functions are defined using the => syntax and do not have their own this binding or arguments object. They inherit this from the surrounding context and cannot be used as methods or constructors.
Regular functions offer more flexibility and are suitable for various use cases, while arrow functions provide a concise syntax and lexical scoping.*/

// example 1: Regular function
/*
function regularFunction(a, b) {
  return a + b;
}

console.log(regularFunction(3, 5)); // Output: 8
*/
// example 2: Arrow function
/*
const arrowFunction = (a, b) => a + b;

console.log(arrowFunction(3, 5)); // Output: 8
*/
// Example 3: 'this' binding:
/*
Regular function with its own 'this' binding:
const regularObj = {
  name: 'Regular',
  regularFunction: function() {
    console.log(this.name);
  }
};
regularObj.regularFunction(); // Output: 'Regular'

Arrow function using lexical 'this' binding:
const arrowObj = {
  name: 'Arrow',
  arrowFunction: () => {
    console.log(this.name);
  }
};
arrowObj.arrowFunction(); // Output: undefined
*/
// Example 4: Usage as object method:
/*
Regular function as object method:
const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // Output: 'Hello, John'

Arrow function as object method (not suitable):
const person = {
  name: 'John',
  greet: () => {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // Output: 'Hello, undefined'
*/
// Example 5: Constructor Function:
/*
Regular function as constructor:
function RegularConstructor(name) {
  this.name = name;
}
const regularInstance = new RegularConstructor('John');
console.log(regularInstance.name); // Output: 'John'

Arrow function as constructor (not suitable):
const ArrowConstructor = (name) => {
  this.name = name;
};
const arrowInstance = new ArrowConstructor('John'); // Error: ArrowConstructor is not a constructor
*/

// 2. What is a React Component?
// A react component is a resuable code that is used to create one part of the application UI.
// Components can be either class based or functional based.
// Components are the building blocks of a React application, allowing for modular and reusable UI development. They can be included in other components by using their name as if they were HTML elements. Components help in organizing and maintaining code by breaking down the user interface into smaller, manageable pieces.
/*
Functional components: These are JavaScript functions that take props as arguments and return a JSX element. They are simpler and faster than class components and are used when the component does not require state or lifecycle methods.
Class components: These are more complex than functional components and are used when the component requires state or lifecycle methods. They are created using ES6 classes and extend the React.Component class. Class components have a render method that returns a JSX element.
*/

// 3. How do you make a React functional component?
// By simply using javascript functions to create a component.
// eg:
/*
import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}
*/

// 4. What is the difference between a pure JavaScript function and a functional component?
// The pure javascript function is used only in javascript to reuse the functions in the later part of the code, whereas functional component is used in react to create reusable UI components using javascript functions within the react library.
// Pure JavaScript functions can be used in any JavaScript application or script. They are not tied to any specific framework or library.
// Functional components have a specific structure and return JSX elements, allowing them to integrate smoothly with React's component-based architecture and provide additional features specific to React.

// 5. How small is a React component?
// A React component can be as small as a single line of code that returns a single value.
// eg: const Button = () => <button>action</button>
// React's component-based architecture and the use of JSX make it possible to create small, focused components that encapsulate specific UI elements or functionality. This allows for modular and reusable code, as well as improved readability and maintainability.

// 6. Can we make a button or input field component?
// Yes, we can make a button or input field component.
// eg: const Button = () => <button>action</button> This is a button component
/*


In the above example, the Button and InputField components are imported and used within the App component. The Button component is rendered with a click handler and a label, while the InputField component is rendered with a type, value, and change handler.

*/

// 7. Make a reusable Button component.

// Button component:
// import React from 'react';

// const Button = ({ onClick, text }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default Button;



// import React from 'react';
// import Button from './Button';

// const App = () => {
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} text="Click me" />
//     </div>
//   );
// };

// export default App;

// 8. Make a reusable InputField component.

// Input component:
// import React from 'react';

// const InputField = ({ type, value, onChange }) => {
//   return (
//     <input type={type} value={value} onChange={onChange} />
//   );
// };

// export default InputField;


// import React from 'react';
// import InputField from './InputField';

// const App = () => {
//   const handleChange = (event) => {
//     console.log('Input value:', event.target.value);
//   };

//   return (
//     <div>
//       <InputField type="text" value="" onChange={handleChange} />
//     </div>
//   );
// };

// export default App;


// 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

/* AlertBox.jsx:
import React from 'react';
import './AlertBox.css';

const AlertBox = ({ type, message }) => {
  const alertClass = type === 'warning' ? 'alert-warning' : 'alert-success';

  return (
    <div className={`alert-box ${alertClass}`}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;
*/

/* AlertBox.css
.alert-box {
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
}

.alert-warning {
  background-color: #f9c851;
  color: #8b5315;
}

.alert-success {
  background-color: #9ee37d;
  color: #1b4d1b;
}
*/
/* App.jsx:
import React from 'react';
import AlertBox from './AlertBox';

function App() {
  return (
    <div>
      <AlertBox type="warning" message="This is a warning alert!" />
      <AlertBox type="success" message="This is a success alert!" />
    </div>
  );
}

export default App;
*/


// Exercise: Level 2
// 1. Create functional components and display the following images