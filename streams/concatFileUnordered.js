const fs = require("fs");

const fileBig = "images/big.txt";
const fileSmall = "images/small.txt";
const output = "output.txt";
const startTime = Date.now();

const abc = fs.createWriteStream(output);
fs.createReadStream(fileBig)
  // .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(abc)
  .on("finish", () => {
    const end = Date.now() - startTime;
    console.log(` ended bif file in: ${end} milliseconds`);
  });

fs.createReadStream(fileSmall)
  .pipe(abc)
  .on("finish", () => {
    const end = Date.now() - startTime;
    console.log(` ended small file in: ${end} milliseconds`);
  });
