// code your solution here
// Define a Function Using Function Declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Define Hoisting
// Hoisting is the JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// Function expressions and variables initialized with the var keyword are hoisted, while variables declared with let and const are not hoisted.

// Define Function Expression
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Define Anonymous Function
// An anonymous function is a function without a name.
// It is commonly used as a callback function or to encapsulate a block of code that doesn't need to be reused.
const wrapAdjective = function (visualFlair = "*") {
    return function (adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
};

// Define an IIFE: Immediately-Invoked Function Expression
// An Immediately-Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined.
// It is wrapped in parentheses and followed by another set of parentheses to invoke the function immediately.
(function () {
    console.log("This is an IIFE");
})();

// Define Function-Level Scope
// Function-level scope means that variables defined inside a function are only accessible within that function, including any nested functions.

// Define Scope Chain
// The scope chain refers to the process in JavaScript where the runtime environment maintains a list of all variables and their values accessible to the current execution context.
// When a variable is referenced, JavaScript looks for it first in the current scope, then in the outer scope, and continues up the chain until it finds the variable or reaches the global scope.

// Define Closure
// A closure is a function that remembers the variables from its parent scope even after the parent function has finished executing.
// It retains access to its outer function's variables, allowing the inner function to "close over" or "enclose" those variables.

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
