const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

const startTime = Date.now();

fs.readFile(file, (err, buffer) => {
    zlib.gzip(buffer, (err, zbuffer) => {
        fs.writeFile(`${file}.zip`, zbuffer, err => {
            const time = Date.now() - startTime;
            console.log(`zip is done in ${time} millisecons`);
        });
    });
})


