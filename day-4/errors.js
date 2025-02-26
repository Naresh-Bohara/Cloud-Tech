// Errors in JS:



// evalError: 
// try {
//     throw new EvalError("Hello");
//   } catch (e) {
//     console.log(e instanceof EvalError); // true
//     console.log(e.message); // "Hello"
//     console.log(e.name); // "EvalError"
//     console.log(e.stack); // Stack of the error
//   }
  

// try {
//     eval("hoo bar"); // Invalid JavaScript (Unexpected Identifier)
//   } catch (e) {
//     console.log(e instanceof EvalError); // Might not work, as modern JS throws SyntaxError instead
//     console.log(e.message);
//   }


// try {
//     eval("console.log('Hello, world!');"); // Valid JavaScript code inside eval()
//   } catch (e) {
//     console.log(e.message);
//   }


// range error:
// try {
//     let arr = new Array(-1); // Array length cannot be negative
//   } catch (e) {
//     console.log(e instanceof RangeError); // true
//     console.log(e.message);
//   }
//   try {
//     let num = 1.2345;
//     console.log(num.toFixed(100)); // Exceeds max precision
//   } catch (e) {
//     console.log(e instanceof RangeError); // true
//     console.log(e.message);
//   }
  

// let num = 1.2345;
// console.log(num.toFixed(2)); // "1.23" (Valid range)
//refrence error
// try {
//     console.log(notDeclaredVar); // Variable does not exist
//   } catch (e) {
//     console.log(e instanceof ReferenceError); // true
//     console.log(e.message);
//   }

// let message = "Hello!";
// console.log(message); // Works fine

//SyntaxError
// try {
//     eval("if true console.log('Error')"); // Missing parentheses
//   } catch (e) {
//     console.log(e instanceof SyntaxError); // true
//     console.log(e.message);
//   }
  

// type error 
// try {
//     let num = null;
//     console.log(num.toFixed(2)); //  TypeError (Cannot call toFixed on null)
//   } catch (e) {
//     console.log(e instanceof TypeError); // true
//     console.log(e.message);
//   }

// uri error 
// try {
//     decodeURI("%"); //  URIError (Invalid encoding)
//   } catch (e) {
//     console.log(e instanceof URIError); // true
//     console.log(e.message);
//   }

  //AggregateError:
//   Promise.any([
//     Promise.reject(new Error("Error 1")),
//     Promise.reject(new Error("Error 2"))
//   ]).catch(e => console.log(e.errors)); //  Handles multiple errors
  

// try {
//     throw new AggregateError([new Error("Error A"), new Error("Error B")], "Multiple errors");
//   } catch (e) {
//     console.log(e.name); // "AggregateError"
//     console.log(e.message); // "Multiple errors"
//   }
  

// try {
//     function recurse() { recurse(); }
//     recurse();
//   } catch (e) {
//     console.log(e instanceof InternalError); // true
//     console.log(e.message); // "too much recursion"
//   }
  

// async error 
// async function fetchUser() {
//     try {
//       let response = await fetch("https://api.example.com/user");
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   }
//   fetchUser();
  