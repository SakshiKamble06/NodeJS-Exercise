const math = require('./src/math');
const settings = require('./config/settings');

const sum = math.add(10, 5);

console.log(`Sum: ${sum}`);
console.log(`App running on port: ${settings.port}`);