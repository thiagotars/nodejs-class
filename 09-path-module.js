const path = require("path");

// path separator
console.log(path.sep);

// join path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base path (last file)
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
