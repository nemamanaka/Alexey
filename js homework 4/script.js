



// const userInput = prompt ("Введіть число:");

// const number = parseInt(userInput);


// if (isNaN(number)) {
//   console.log("Помилка! Некоректне число.");
// } else {
//   if (number % 2 === 0) {
//     alert("Введене число є парним.");
//   }
//    else {
//     alert("Введене число є непарним.");
//   }
// } 


/* Boolean */


// const answer1 = confirm("Чи володієте ви водійським посвідченням?");
// const answer2 = confirm("Як ви ставитесь до електромобілів?");

// console.log("Відповідь на перше питання:", answer1);
// console.log("Відповідь на друге питання:", answer2);

 


// Boolean: if 


//  const answer = confirm("Яка ваша стать?");

// console.log("Відповідь на питання:", answer);

// if (answer) {
//   alert("Ви жінка");
// } else {
//   alert("Ви чоловік");
// } 


// Ternary 

 
// const ansMale = confirm("Ви чоловік?");

// const message = ansMale ? "Ви чоловік" : "Ви жінка";
// alert(message); 





//  Prompt: or 


// let age = prompt("Введіть ваш вік:");

// if (!age) {
//   alert("Помилка! Вік не введений або скасовано.");
// } else {
//   alert("Ваш вік: " + age);
// }
 




// Confirm: if this days 

// let shopping = confirm("Шопінг?");
//  if (!shopping) {
//    alert("((((");
//  } 




//  Default: or 



// let firstName = prompt("Введіть ім'я:") || "Іван";
// let lastName = prompt("Введіть прізвище:") || "Іванов";
// let fullName = prompt("Введіть повне ім'я:") || (firstName + " " + lastName);

// console.log("Ім'я: " + firstName);
// console.log("Прізвище: " + lastName);
// console.log("Повне ім'я: " + fullName); 


// Default: if 


//  let firstName = prompt("Введіть ім'я:");
// if (!firstName) {
//   firstName = "Іван";
// }

// let lastName = prompt("Введіть прізвище:");
// if (!lastName) {
//   lastName = "Іванов";
// }

// let fullName;
// if (!fullName) {
//   fullName = firstName + " " + lastName;
// }

// console.log("Ім'я: " + firstName);
// console.log("Прізвище: " + lastName);
// console.log("Повне ім'я: " + fullName); 





//  let login = prompt("Введіть логін:");

// if (login === "admin") {
//   let password = prompt("Введіть пароль:");
  
//   if (password === "qwerty") {
//     alert("Логін успішний! Вітаємо, admin!");
//   } else {
//     alert("Помилка! Невірний пароль.");
//   }
// } else {
//   alert("Помилка! Невірний логін.");
// } 


// 123

 let userChoice = prompt("Введіть свій варіант: камінь, ножиці або папір").toLowerCase();

let computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "камінь";
} else if (computerChoice < 0.66) {
  computerChoice = "ножиці";
} else {
  computerChoice = "папір";
}

alert("Варіант програми: " + computerChoice);

if (userChoice === computerChoice) {
  alert("Нічия!");
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  alert("Ви перемогли!");
} else {
  alert("Комп'ютер переміг!");
} 




