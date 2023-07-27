const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // create variable with the result of the read
  const first = result;
  //   console.log(first);

  // call back function functionality
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // create variable with the result of the read
    const second = result;
    // console.log(second);

    // call back function functionality
    writeFile(
      "./content/result-async.txt",
      `The result is: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // call back function functionality
        console.log("task is done");
      }
    );
  });
});
console.log("starting new task");
