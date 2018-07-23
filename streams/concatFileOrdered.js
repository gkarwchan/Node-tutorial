const fromArray = require("from2-array");
const through = require("through2");
const fs = require("fs");

const files = ["images/big.txt", "images/small.txt"];
const destination = "output.txt";
const startTime = Date.now();

const destStream = fs.createWriteStream(destination);
fromArray
  .obj(files)
  .pipe(
    through.obj((file, enc, done) => {
      const src = fs.createReadStream(file);
      src.pipe(
        destStream,
        { end: false }
      );
      src.on("end", done);
    })
  )
  .on("finish", () => {
    destStream.end();
    const end = Date.now() - startTime;
    console.log(` ended small file in: ${end} milliseconds`);
  });
