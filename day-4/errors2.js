
// try catch
// try {
//     let data = fetchDataFromAPI(); // Might fail
//     console.log(data);
//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);
//     // Log the error or notify the user
//   } 


// finally
// let result;

// try {
//   let num1 = 10;
//   let num2 = 0; // This will cause a division by zero error
//   result = num1 / num2;
//   console.log("Result:", result);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// } finally {
//   console.log("Cleaning up resources... (Executed no matter what)");
// }

  
//throw
// function processOrder(order) {
//     if (!order.isValid) {
//       throw new Error("Invalid order");
//     }
//     // Process order
//   }
  
//   try {
//     let order = { isValid: false };
//     processOrder(order); // Will throw
//   } catch (error) {
//     console.error(error.message); // "Invalid order"
//   }
  

// // custom error:
// class NotFoundError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "NotFoundError";
//       this.statusCode = 404;
//     }
//   }
  
//   function getUser(id) {
//     let user = null; // Simulate user not found
//     if (!user) {
//       throw new NotFoundError(`User with ID ${id} not found`);
//     }
//     return user;
//   }
  
//   try {
//     getUser(123); // Will throw custom error
//   } catch (error) {
//     if (error instanceof NotFoundError) {
//       console.error(error.message); // "User with ID 123 not found"
//       // Send response with proper status code
//     }
//   }
  

// error obj 
// function validateAge(age) {
//     if (age < 0 || age > 150) {
//       throw new Error("Age must be between 0 and 150");
//     }
//   }
  
//   try {
//     validateAge(200); // Invalid age
//   } catch (error) {
//     console.error(error.message); // "Age must be between 0 and 150"
//   }
  

//  Custom Error: User not found in the database
// class UserNotFoundError extends Error {
//     constructor(message) {
//       super(message); // Call the parent constructor with the message
//       this.name = "UserNotFoundError"; // Set the name property to the custom error type
//       this.statusCode = 404; // Optionally, you can include HTTP status codes for API errors
//     }
//   }
  
//   // Usage example:
//   try {
//     let user = null; // Simulating that the user was not found
//     if (!user) {
//       throw new UserNotFoundError("User not found in the database");
//     }
//   } catch (error) {
//     if (error instanceof UserNotFoundError) {
//       console.log(error.name); // "UserNotFoundError"
//       console.log(error.message); // "User not found in the database"
//       console.log(error.statusCode); // 404
//     } else {
//       console.log("General error occurred");
//     }
//   }
  


  // multiple custom error:
  //  Custom Error for Unauthorized Access
// class UnauthorizedError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "UnauthorizedError";
//       this.statusCode = 401;
//     }
//   }
  
//   //  Custom Error for Invalid Input
//   class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//       this.statusCode = 400;
//     }
//   }
  
  // Example of using both:
//   function authenticateUser(user) {
//     if (!user) {
//       throw new UnauthorizedError("User not authenticated");
//     }
//     if (!user.email) {
//       throw new ValidationError("Email is required");
//     }
//   }
  
//   try {
//     authenticateUser({}); // Invalid user, throws validation error
//   } catch (e) {
//     if (e instanceof UnauthorizedError) {
//       console.log("Unauthorized access:", e.message);
//     } else if (e instanceof ValidationError) {
//       console.log("Validation issue:", e.message);
//     }
//   }

