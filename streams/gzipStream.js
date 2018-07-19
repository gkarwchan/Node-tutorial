const fs = require("fs");
const zlib = require("zlib");
// const crypto = require('crypto');

const file = process.argv[2];
const startTime = Date.now();

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  // .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(fs.createWriteStream(`${file}-stream.zip`))
  .on("finish", () => {
    const end = Date.now() - startTime;
    console.log(`zipping ended in: ${end} milliseconds`);
  });
