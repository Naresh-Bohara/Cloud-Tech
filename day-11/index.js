console.log("Step 1");

setTimeout(() => console.log("Step 2 - Timeout"), 0);

async function fetchData() {
  await Promise.resolve();
  console.log("Step 3 - Promise resolved");
}

fetchData(); 

console.log("Step 4");
