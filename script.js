`use strict`;

///////////// ALL GLOBAL VARIABLES /////////////

const inputArea = document.querySelector(`.userInput`);
const resultText = document.querySelector(`.resultText`);
const btnUpperCase = document.querySelector(`.UpperCase`);
const btnLowerCase = document.querySelector(`.LowerCase`);
const btnCapitalize = document.querySelector(`.Capitalize`);
const btnCamelCase = document.querySelector(`.CamelCase`);
const btnUnderscore_Case = document.querySelector(`.Underscore_Case`);

///////////// MAIN FUNCTIONS /////////////

const getUserInput = function () {
  return inputArea.value;
};

const upperCase = function () {
  const userInput = getUserInput();
  return userInput.toUpperCase();
};

const lowerCase = function () {
  const userInput = getUserInput();
  return userInput.toLowerCase();
};

const capitalize = function () {
  const wordCapitalized = [];
  const userInput = getUserInput();
  const userInputLower = userInput.toLowerCase().trim();
  const wordsArray = userInputLower.split(` `);

  // create new array wordsArrayTrue without empty values
  const wordsArrayTrue = wordsArray.filter(Boolean);

  // push() to empty "wordCapitalized" array changed elements of "wordsArray"
  for (const word of wordsArrayTrue) {
    wordCapitalized.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return wordCapitalized.join(` `);
};

const camelCase = function () {
  const userInput = getUserInput();

  // count spaces (` `)
  // count underscores (_)
  // if more spaces replace spaces capitalize and remove spaces
  // if more underscore capitalize and remove underscores


  // count values in an array:
  /*
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  */
}

console.log(getOccurrence(arr, 1));  // 2
console.log(getOccurrence(arr, 3));  // 3
};

///////////// EVENT LISTENERS /////////////

btnUpperCase.addEventListener(`click`, function () {
  const userInputUpper = upperCase();
  resultText.textContent = userInputUpper;
});

btnLowerCase.addEventListener(`click`, function () {
  const userInputLower = lowerCase();
  resultText.textContent = userInputLower;
});

btnCapitalize.addEventListener(`click`, function () {
  const userInputCapitalized = capitalize();
  resultText.textContent = userInputCapitalized;
});
/* Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK � */
