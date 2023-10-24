#! /usr/bin/env node
import inquirer from "inquirer";
import { sum, sub, mul, div } from "./calc.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "a",
        type: "number",
        message: gradient.rainbow("Enter first number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please input a number: ";
            }
            return true;
        },
    },
    {
        name: "b",
        type: "number",
        message: gradient.rainbow("Enter second number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please input a number: ";
            }
            return true;
        },
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div"],
        message: gradient.rainbow("Enter your operation: "),
    }
];
let answer = [{
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again?"
    }];
(async () => {
    await showBanner('Calculator', 'This calculator can perform additoin, substraction, multiplication and divisioin...', "red", "blue");
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { a, b, operation } = await inquirer.prompt(answers);
        if (operation == "add") {
            console.log("The sum of two numbers: ", sum(a, b));
        }
        else if (operation == "sub") {
            console.log("The difference of two numbers: ", sub(a, b));
        }
        else if (operation == "mul") {
            console.log("The multiplication of two numbers: ", mul(a, b));
        }
        else if (operation == "div") {
            console.log("The divison of two numbers: ", div(a, b));
        }
        else {
            console.log("Operation is not defined...");
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
;
setTimeout(() => {
    calculator();
}, 1000);
