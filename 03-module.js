// CommonJS - every file is a module by default
// Modules - Encapsulated code (only share the minimum)

const names = require("./04-names");
const sayHi = require("./05-utils");
const { items, singlePerson } = require("./06-alternative-flavors");
const data = require("./06-alternative-flavors");

require("./07-mind-granade");

console.log(data);

console.log(items);
console.log(singlePerson);

sayHi("alice");
sayHi(names.susan);
sayHi(names.mike);
sayHi(names.brian);
