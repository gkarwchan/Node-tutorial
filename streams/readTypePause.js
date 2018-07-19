process.stdin
	.on('readable', () => {
		let chunk;
		console.log('New data available');
		while((chunk = process.stdin.read()) !== null) {
			console.log(`Chunk read: (${chunk.length})`);
		}
	})
	.on('end', () => process.stdout.write('End of file'));

