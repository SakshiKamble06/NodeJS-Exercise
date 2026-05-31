const fs = require('fs');
const path = require('path');

// Directory path
const dirPath = path.join(__dirname, 'myFiles');
const filePath = path.join(dirPath, 'example.txt');

// 1. Create Directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created.');

    // 2. Write to File
    fs.writeFile(filePath, 'Hello, this is an example text!', (err) => {
        if (err) throw err;
        console.log('File written.');

        // 3. Read File
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content:', data);

            // 4. Append to File
            fs.appendFile(filePath, '\nAppending more content.', (err) => {
                if (err) throw err;
                console.log('Content appended.');

                // 5. Rename File
                const newFilePath = path.join(dirPath, 'renamedExample.txt');
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) throw err;
                    console.log('File renamed.');

                    // 6. Delete File
                    fs.unlink(newFilePath, (err) => {
                        if (err) throw err;
                        console.log('File deleted.');

                        // 7. Delete Directory
                        fs.rm(dirPath, { recursive: true, force: true }, (err) => {
                            if (err) throw err;
                            console.log('Directory deleted.');
                        });
                    });
                });
            });
        });
    });
});