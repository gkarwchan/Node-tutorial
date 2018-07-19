process.stdin
  .on("data", chunk => {
    console.log("New data availabe");
    console.log(`chunck read: (${chunk.length})`);
  })
  .on("end", () => process.stdout.write("End of stream"));
