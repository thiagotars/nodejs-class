const { readFileSync, writeFileSync } = require("fs");

// read existing file
const first = readFileSync("./content/first.txt", "utf8");
console.log(first);

// read existing file
const second = readFileSync("./content/second.txt", "utf8");
console.log(second);

// write new file. it can also overwrite or append content of existing file
writeFileSync(
  "./content/result-sync.txt",
  `The result of the concatenation between both files is: ${first} ${second}`
  //   { flag: "a" } by adding this flag a, it will append instead of overwriting the content of the file
);
