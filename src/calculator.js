// calculator.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCalculator() {

    while (true) {

        console.log("\n===== CALCULATOR =====");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Square");
        console.log("6. Exit");

        rl.question("Enter your choice: ", (choice) => {

            choice = Number(choice);

            switch (choice) {

                case 1:
                    rl.question("Enter first number: ", (a) => {
                        rl.question("Enter second number: ", (b) => {
                            console.log("Result =", Number(a) + Number(b));
                            startCalculator();
                        });
                    });
                    break;

                case 2:
                    rl.question("Enter first number: ", (a) => {
                        rl.question("Enter second number: ", (b) => {
                            console.log("Result =", Number(a) - Number(b));
                            startCalculator();
                        });
                    });
                    break;

                case 3:
                    rl.question("Enter first number: ", (a) => {
                        rl.question("Enter second number: ", (b) => {
                            console.log("Result =", Number(a) * Number(b));
                            startCalculator();
                        });
                    });
                    break;

                case 4:
                    rl.question("Enter first number: ", (a) => {
                        rl.question("Enter second number: ", (b) => {

                            if (Number(b) === 0) {
                                console.log("Cannot divide by zero");
                            } else {
                                console.log("Result =", Number(a) / Number(b));
                            }

                            startCalculator();
                        });
                    });
                    break;

                case 5:
                    rl.question("Enter number: ", (a) => {
                        console.log("Square =", Number(a) * Number(a));
                        startCalculator();
                    });
                    break;

                case 6:
                    console.log("Calculator Closed");
                    rl.close();
                    process.exit(0);

                default:
                    console.log("Invalid Choice");
                    startCalculator();
            }

        });

        break;
    }
}

startCalculator();