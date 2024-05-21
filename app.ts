#! /usr/bin/env node


import inquirer from "inquirer"; //inquirer is a command line interface for node.js

const answer: { sentence: string } = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the words.",
  },
]);

const words = answer.sentence.trim().split(" ")//.trim() will remover white spaces from the begginin g and end of the sentence (white space mean more than one space) and .split() arrange them in an array.

console.log(words)

console.log(`Your sentence word count is :${words.length}`)