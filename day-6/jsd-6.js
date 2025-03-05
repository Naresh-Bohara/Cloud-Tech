let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj)

const string = JSON.stringify(obj)
console.log(string)

const animal = {
    eats: true
  };
  const rabbit = Object.create(animal); // rabbit's prototype is animal
  rabbit.hops = true;
  
  console.log(rabbit.hops);  // true
  console.log(rabbit.eats);  // true (inherited from animal)

  
  const person = {
    name: "Naresh"
  };
  const employee = Object.create(person);
  employee.job = "Developer";
  console.log(employee.name); // Naresh (from person prototype)
  console.log(employee.__proto__); // Reference to person object
  