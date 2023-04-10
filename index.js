// первый вариант. функция скобок с приминением стека.
function checkQuotes(str) {
  const arr = str.split("");
  console.log(arr);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const quotes = arr[i];
    let lastQuotes = "";
    //проверка на открывающую скобку
    if (quotes === "(" || quotes === "[" || quotes === "{" || quotes === "<") {
      stack.push(quotes);
    }
    //проверка на закрывающую скобку
    if (quotes === ")" || quotes === "]" || quotes === "}" || quotes === ">") {
      const lastQuotes = stack.pop();
      //проверка на соответствие открывающих и закрывающих скобок.
      if (
        (quotes === ")" && lastQuotes !== "(") ||
        (quotes === "]" && lastQuotes !== "[") ||
        (quotes === "}" && lastQuotes !== "{") ||
        (quotes === ">" && lastQuotes !== "<")
      ) {
        return alert("false-ошибка");
      }
    }
  }

  if (stack.length) return alert("false-ошибка");
  return alert("true-правильно");
}

const line1 = checkQuotes(prompt("введите рядок со скобочками"));

//----------
//второй вариант. функция скобок с приминением стека.

function checkBrackets(str) {
  const openingBrackets = ["(", "[", "{", "<"];
  const closingBrackets = [")", "]", "}", ">"];

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const meaning = str[i];
    //проверка на открывающую скобку
    if (openingBrackets.includes(meaning)) {
      stack.push(meaning);
      //проверка на соответствие открывающих и закрывающих скобок.
    } else if (closingBrackets.includes(meaning)) {
      const matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(meaning)];
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingOpeningBracket
      ) {
        alert("false-ошибка");
        return false;
      } else {
        stack.pop();
      }
    }
  }
  alert("true-правильно");
  return stack.length === 0;
}

const line2 = checkBrackets(prompt("введите рядок со скобочками"));
