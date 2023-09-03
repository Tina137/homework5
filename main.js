// #1.1
function logItems(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`${index + 1} - ${array[index]}`);
  }
}
logItems(["ggg", "rgr", "grg"]);

// #1.2
function calculateEngravingPrice(message, pricePerWord) {
  let wordsArray = message.split(" ");
  let price = wordsArray.length * pricePerWord;
  console.log(price);
}
calculateEngravingPrice("message rt", 10);

// #1.3
function findLongestWord(string) {
  const wordsArray = string.split(" ");
  let longestWord = "";
  for (const word of wordsArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log(longestWord);
}
findLongestWord("hbbihv rig1ugugr fuytrertyuioiuytre");

// #1.4
function formatString(string) {
  if (string.length <= 40) {
    console.log(string);
  } else {
    newString = string.slice(0, 40) + "...";
    console.log(newString);
  }
}
formatString(" kiygaspiucdpyab dvfsueofh[uaeg efheohebeeuebe  egeug u r");

// #1.5
function checkForSpam(message) {
  let lMessage = message.toLowerCase();

  if (lMessage.includes("spam") || lMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("message spam"));

// #1.6
// тут є тільки одна проблема, останє значення не зберігається, та я не знаю що з цим зробити
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Number?");

  number = Number(input);

  if (Number.isNaN(number)) {
    alert("Number!!!!!!");
    continue;
  }

  if (input === null) {
    break;
  }
  numbers.push(number);
}
console.log(numbers);
for (let numb of numbers) {
  total += numb;
}
console.log(`Загальна сума чисел дорівнює [${total}]`);

//#2.1
let button = document.querySelector(".h");
button.addEventListener("click", (e) => {
  alert("Hello World!");
});

// #2.2
let formS = document.querySelector(".two-two");
let result = document.querySelector(".r");
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

formS.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.elements.number.value;
  let number = Number(text);
  let rondom = getRandom(100);
  result.innerText = `
    ${rondom}
  `;
  if (number === rondom) {
    result.innerText += `
    win
  `;
  } else {
    result.innerText += `
    lose
  `;
  }
});

// #2.3
let j = document.querySelector(".j");
let times = 0;
document.addEventListener("click", (e) => {
  times++;
  j.innerText = `${times}`;
});

// #2.4
function applyCallbackToEachElement(arr, callback) {
  let newArr = arr.map(callback);
  return newArr;
}
console.log(
  applyCallbackToEachElement([1, 2, 3, 4, 5], (e) => {
    return e * 2;
  })
);

// 2.5
function calculateDiscountedPrice(price, discount) {
  priceWD = price * (1 - discount / 100);
  return priceWD;
}
console.log(calculateDiscountedPrice(100, 20));
