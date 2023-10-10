`use strict`;

// TEST DATA
const exampleString1 = "xcxf dfdfdf ddffd    __f";

////////////////////////////////////////////////
///////////// ALL GLOBAL VARIABLES /////////////
////////////////////////////////////////////////

const inputArea = document.querySelector(`.userInput`);
const resultText = document.querySelector(`.resultText`);
const btnUpperCase = document.querySelector(`.UpperCase`);
const btnLowerCase = document.querySelector(`.LowerCase`);
const btnCapitalize = document.querySelector(`.Capitalize`);
const btnCamelCase = document.querySelector(`.CamelCase`);
const btnSnake_Case = document.querySelector(`.snake_case`);

//////////////////////////////////////////
///////////// MAIN FUNCTIONS /////////////
//////////////////////////////////////////

const getUserInput = function () {
  return inputArea.value;
};

const getOccurrence = function (array, value) {
  // Use the filter method to create a new array containing only elements equal to the given value
  const filteredArray = array.filter(function (v) {
    return v === value;
  });
  // Return the length of the filtered array, which represents the count of occurrences
  return filteredArray.length;
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
  const wordCapitalized = [];
  const userInput = getUserInput().toLowerCase().trim();
  // transform "userInput" into and array "userInputArray"
  const userInputArray = Array.from(userInput);
  // check number of spaces (" ") inside the "userInputArray"
  const numberSpaces = getOccurrence(userInputArray, " ");
  // check number of underscores (" _") inside the "userInputArray"
  const numberUnderscores = getOccurrence(userInputArray, "_");

  // if more or equal spaces, capitalize and return removing all the spaces
  if (numberSpaces >= numberUnderscores) {
    // make new array splitting where there are the spaces " " and remove falsy values
    const wordsArrayTrue = userInput.split(" ").filter(Boolean);
    for (const element of wordsArrayTrue) {
      wordCapitalized.push(
        element.replace(element[0], element[0].toUpperCase())
      );
    }
    return wordCapitalized.join("");
  } // more underscores capitalize and return removing underscores
  else {
    const wordsArrayTrue = userInput.split("_").filter(Boolean);
    for (const element of wordsArrayTrue) {
      wordCapitalized.push(
        element.replace(element[0], element[0].toUpperCase())
      );
    }
    return wordCapitalized.join("");
  }
};

const snakeCase = function () {
  const userInput = getUserInput().toLowerCase().trim();
  // workd with spaces
  const userInputArrayTrue = userInput.split(" ").filter(Boolean);
  return userInputArrayTrue.join("_");
};
///////////////////////////////////////////
///////////// EVENT LISTENERS /////////////
///////////////////////////////////////////

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

btnCamelCase.addEventListener(`click`, function () {
  const userInputCamelCased = camelCase();
  resultText.textContent = userInputCamelCased;
});

btnSnake_Case.addEventListener(`click`, function () {
  const userSnakedCase = snakeCase();
  resultText.textContent = userSnakedCase;
});
