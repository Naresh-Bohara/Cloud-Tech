function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  
  if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);
  