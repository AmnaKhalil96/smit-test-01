////////////////////////////////// QUESTION NO 01 /////////////////////////////////////////
////////////////////////////////////// Part 03 ///////////////////////////////////////////
//1. The following arrow function throws an error. Fix it:
const add = (a, b) =>  a + b
console.log(add(5, 4));

// 2. Resolve a Promise
// Resolve the following promise correctly:

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success!');
        }, 1000);
    });
    
    myPromise.then(console.log)
   myPromise.catch(console.error);

   // 1. Variable Scoping and Closure
// Write a function `createCounter` that creates a closure and allows a user to increment or reset a
// counter. Example:

// Answer
function createCounter() {

    let count = 0;
  
    return {
      increment: function () {
        count++;
        console.log(count);
        return count;
      },
  
      reset: function () {
        count = 0;
        console.log(count);
        return count;
      },
    };
  }


const counter = createCounter();
counter.increment(); // 1

counter.increment(); // 2
counter.reset(); // 0


// 2. Template Literals
// Write a function `greetUser` that takes `name` and `timeOfDay` as inputs and returns a message
// like:
// Good Morning, Alice!

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
  }
  
  console.log(greetUser("Alice", "Morning")); 
  console.log(greetUser("Bob", "Evening"));   

//  3. Destructuring and Default Parameters
//  Given the following object:
//  const user = { name: 'John', age: 25, city: 'New York' };
//  Write a function that extracts `name` and `city` with default parameters and logs the following:
//  Name: John, City: New York

const user = { name: 'John', age: 25, city: 'New York' };

function logUserDetails({ name = "Default Name", city = "Default City" } = {}) {
  console.log(`Name: ${name}, City: ${city}`);
}

logUserDetails(user);                    
logUserDetails({ name: 'Alice' });        
logUserDetails();                        

  