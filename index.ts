#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

let score = 0;

const question1 = await inquirer.prompt(
    {
        type: "list",
        name: "Answer1",
        message: "Q1 : What is TypeScript?",
        choices: ["A superset of JavaScript" , "A subset of JavaScript" , "A completely different language"]
    }
)

if (question1.Answer1 === "A superset of JavaScript") {
    console.log(chalk.green.bold("Correct Answer"));
    score++;
}else{
    console.log(chalk.red.bold("InCorrect Answer"));
}

const question2 = await inquirer.prompt(
    {
        type: "list",
        name: "Answer2",
        message: "Q2 : Which of the following is not a JavaScript data type?",
        choices: ["String" , "Boolean" , "Array"]
    }
)

if (question2.Answer2 === "Array") {
    console.log(chalk.green.bold("Correct Answer"));
    score++;
}else{
    console.log(chalk.red.bold("InCorrect Answer"));
}

const question3 = await inquirer.prompt(
    {
        type: "list",
        name: "Answer3",
        message: "Q3 : What is the file extension for TypeScript files?",
        choices: [".java" , ".ts" , ".js"]
    }
)

if (question3.Answer3 === ".ts") {
    console.log(chalk.green.bold("Correct Answer"));
    score++;
}else{
    console.log(chalk.red.bold("InCorrect Answer"));
}

const question4 = await inquirer.prompt(
    {
        type: "list",
        name: "Answer4",
        message: "Q4 : What is the purpose of the tsc command?",
        choices: ["To run TypeScript code directly" , "To test TypeScript code" , "To compile TypeScript code to JavaScript"]
    }
)

if (question4.Answer4 === "To compile TypeScript code to JavaScript") {
    console.log(chalk.green.bold("Correct Answer"));
    score++;
}else{
    console.log(chalk.red.bold("InCorrect Answer"));
}

const question5 = await inquirer.prompt(
    {
        type: "list",
        name: "Answer5",
        message: "Q5 : What is the purpose of the any type?",
        choices: ["To specify a type for a variable" , "To indicate a variable can hold any type" , "To indicate a variable is nullable"]
    }
)

if (question5.Answer5 === "To indicate a variable can hold any type") {
    console.log(chalk.green.bold("Correct Answer"));
    score++;
}else{
    console.log(chalk.red.bold("InCorrect Answer"));
}

const confirm = await inquirer.prompt(
    {
        type: "confirm",
        name: "Answer",
        message: "Do You Want to Learn More?",
    }
)
if(confirm.Answer === true) {
    const question6 = await inquirer.prompt(
        {
            type: "list",
            name: "Answer6",
            message: "Q6 : What is the purpose of the type keyword?",
            choices: ["To define a new type" , "To define a new function" , "To define a new interface"]
        }
    )

    if (question6.Answer6 === " To define a new type") {
        console.log(chalk.green.bold("Correct Answer"));
        score++;
    }else{
        console.log(chalk.red.bold("InCorrect Answer"));
    }

    const question7 = await inquirer.prompt(
        {
            type: "list",
            name: "Answer7",
            message: "Q7 : What is the difference between a type and an interface?",
            choices: ["A type is used for objects, while an interface is used for functions" , "A type is used for functions, while an interface is used for objects" , "type is used for objects, while an interface is used for arrays"]
        }
    )
    if (question7.Answer7 === "A type is used for functions, while an interface is used for objects") {
        console.log(chalk.green.bold("Correct Answer"));
        score++;
    }else{
        console.log(chalk.red.bold("InCorrect Answer"));
    }

    const question8 = await inquirer.prompt(
        {
            type: "list",
            name: "Answer8",
            message: "Q8 : What is the purpose of the void type?",
            choices: ["To indicate a function returns no value" , "To indicate a variable can hold any type" , "To indicate a variable is nullable"]
        }
    )
    if (question8.Answer8 === "To indicate a function returns no value") {
        console.log(chalk.green.bold("Correct Answer"));
        score++;
    }else{
        console.log(chalk.red.bold("InCorrect Answer"));
    }

    const question9 = await inquirer.prompt(
        {
            type: "list",
            name: "Answer9",
            message: "Q9 : What is the purpose of the import statement?",
            choices: ["To import a module" , "To define a module" , "To use a module"]
        }
    )
    if (question9.Answer9 === "To import a module") {
        console.log(chalk.green.bold("Correct Answer"));
        score++;
    }else{
        console.log(chalk.red.bold("InCorrect Answer"));
    }

    const question10 = await inquirer.prompt(
        {
            type: "list",
            name: "Answer10",
            message: "Q10 : What is the purpose of a constructor in a class?",
            choices: ["To define the class" , "To initialize the class" , "To create an instance of the class"]
        }
    )
    if (question10.Answer10 === "To initialize the class") {
        console.log(chalk.green.bold("Correct Answer"));
        score++;
    }else{
        console.log(chalk.red.bold("InCorrect Answer"));
    }

    console.log("-".repeat(25));

    console.log(chalk.bold(`QUIZ ENDED.`));
    console.log(chalk.green.bold(`Your Score is ${chalk.bold.yellow(score)} out of ${chalk.bold.yellow("10")} \n`));

    if(score >= 7){
        console.log(chalk.green.bold("PASS!"));
    }else {
        console.log(chalk.red.bold("FAIL!"));
    }
    
}else{
    console.log(chalk.green.bold(`Your Score is ${chalk.bold.yellow(score)} out of ${chalk.bold.yellow("5")} \n`));
    if(score >= 3){
        console.log("-".repeat(25));

        console.log(chalk.bold(`QUIZ ENDED.`));
        console.log(chalk.green.bold("PASS!"));
    }else{
        console.log(chalk.red.bold("FAIL!"));
    }
}
console.log(chalk.green.bold("THANK YOU!"));