#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


let userInput = await inquirer.prompt(
  {
    name: "operation",
    type: "list",
    message: chalk.yellow ("WHAT DO YOU WANT TO DO?"),
    choices: [chalk.bold("COUNT ALPHABETS"),chalk.bold("COUNT WORDS")]
  }
)

if (userInput.operation == chalk.bold("COUNT ALPHABETS")){
  console.log(chalk.red("NOTE: IT WILL NOT COUNT SPACES."))
  
  let userSentence = await inquirer.prompt(
    {
      name: "sentence",
      type: "input",
      message: chalk.yellow("WRITE A SENTENCE TO COUNT ALPHABETS...")
    }
  )
  let countedSentence = userSentence.sentence.replace(/\s/g, '')
  console.log(chalk.italic.magenta(`YOUR SENTENCE'S ALPHABET COUNT IS: ${countedSentence.length}`))
}else if(userInput.operation == chalk.bold("COUNT WORDS")){
  console.log(chalk.red("NOTE: AVOID EXTRA SPACES BETWEEN THE SENTENCE"))
  let userSentenceForWords = await inquirer.prompt(
    {
      name: "sentence",
      type : "input",
      message: chalk.yellow("WRITE A SENTENCE TO COUNT WORDS...")
    }
  )
  let countedSentence = userSentenceForWords.sentence.trim().split(" ")
  console.log(chalk.italic.magenta(`YOUR SENTENCE'S WORD COUNT IS : ${countedSentence.length}`))
  
}else {
  console.log(chalk.red("INVALID OPERATION!"))
}
  

  //.trim()will Remove whitespace from both sides (end and beggining) of a string: (white space means more than one space) 
  //I have used split(" ") means ke space ko as a parameter, in position of seperator de rhe hain, jo bhi word ya cheez space ke baad hogi woh seperate ho jae gi or split aik array return kare ga jis me har aik seperated substance aik element hoga 
  /*Description of split(" ")
  The split() method splits a string into an array of substrings.
  
  The split() method returns the new array.
  
  The split() method does not change the original string.
  
  If (" ") is used as separator, the string is split between words.
  */
  
  /*
  example: 
  let sentence = "how are you doing today?"
  console.log(sentence.split("o")) //output: [ 'h', 'w are y', 'u d', 'ing t', 'day?' ] yahan per har "o" ke baad seperation hogi
  */