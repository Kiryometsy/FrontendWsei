// lab01/module-data-generator.js
const fs = require('fs');

const count = Number(process.argv[2]); // Number of objects to generate
let names = [];                          // Array for storing names

fs.readFile('./src/modules/randomData/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split the string into an array of names
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    let content = "export const data = [\n";

    for (let i = 0; i < count; i++) {
        // Generate random values
        const name = names[Math.floor(Math.random() * names.length)];
        const birthDate = new Date(Date.now() - Math.random() * (60 * 60 * 24 * 365 * 80 * 1000)); // Random date of birth
        const eyesColors = ["blue", "green", "brown", "hazel"];
        const eyes = eyesColors[Math.floor(Math.random() * eyesColors.length)];

        // Create object with unique ID
        const obj = {
            id: i + 1,
            name: name,
            birth: birthDate.toISOString().split('T')[0], // YYYY-MM-DD
            eyes: eyes
        };

        content += JSON.stringify(obj) + (i < count - 1 ? ',' : '') + "\n"; // Add comma if not the last object
    }

    content += "];\n";

    // Write to module-data.js
    fs.writeFile('./src/modules/randomData/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
