// Import the fs module
import fs from 'fs';

// Write data to a file
fs.writeFile('myfile.txt', 'Hello World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully!');
});