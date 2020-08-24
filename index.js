const fs = require("fs");
let dataTxT = fs.readFileSync("hello.txt");
dataTxT = dataTxT.toString();
dataTxT = dataTxT.split("\n");

console.log(dataTxT);


