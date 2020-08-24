const fs = require("fs");
let dataTxT = fs.readFileSync("hello.txt");

console.log(dataTxT.toString());


