// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// let firstName = "Bryan";
// console.log(firstName);

// const ageBryan = 2037 - 1996;
// console.log(ageBryan);

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*
const markWeight = 78;
// const markWeight = 95;
const johnWeight = 92;
// const johnWeight = 85;
const markHeight = 1.69;
// const markHeight = 1.88;
const johnHeight = 1.95;
// const johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);
// markBMI = markWeight / (markHeight * markHeight);
// console.log(markBMI);

let johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);
// johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/

/*
const firstName = "Bryan";
const bryanNew = `I'm ${firstName}`;
console.log(bryanNew);
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah needs to wait ${yearsLeft} years more before she can drive.`
  );
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

/*
const markWeight = 78;
// const markWeight = 95;
const johnWeight = 92;
// const johnWeight = 85;
const markHeight = 1.69;
// const markHeight = 1.88;
const johnHeight = 1.95;
// const johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*

// let dolphinAvg = (96 + 108 + 89) / 3;
// let koalaAvg = (88 + 91 + 110) / 3;
// let dolphinAvg = (96 + 108 + 89) / 3;
// let koalaAvg = (88 + 91 + 110) / 3;
let dolphinAvg = (97 + 112 + 101) / 3;
let koalaAvg = (109 + 95 + 106) / 3;

if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
  console.log(`Dolphins win!`);
} else if (dolphinAvg < koalaAvg && koalaAvg >= 100) {
  console.log(`Koalas win!`);
} else if (dolphinAvg === koalaAvg && dolphinAvg >= 100 && koalaAvg >= 100) {
  console.log(`DRAW!`);
}
*/

/*
const day = "monday";

switch (day) {
  case "monday":
    console.log(`It's Monday`);
    break;
  case "tuesday":
    console.log(`It's Tuesday`);
    break;
  case "wednesday":
    console.log(`It's Wednesday`);
    break;
  case "thursday":
    console.log(`It's Thursday`);
    break;
  case "friday":
    console.log(`It's Friday`);
    break;
  case "saturday":
    console.log(`It's Saturday`);
    break;
  case "sunday":
    console.log(`It's Sunday`);
    break;
  default:
    console.log(`Not a valid day.`);
}

if (day === "monday") {
  console.log(`It's Monday`);
} else if (day === "tuesday") {
  console.log(`It's Tuesday`);
} else if (day === "wednesday") {
  console.log(`It's Wednesday`);
} else if (day === "thursday") {
  console.log(`It's Thursday`);
} else if (day === "friday") {
  console.log(`It's Friday`);
} else if (day === "saturday") {
  console.log(`It's Saturday`);
} else if (day === "sunday") {
  console.log(`It's Sunday`);
} else {
  console.log(`Not a valid day.`);
}
*/

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 43
*/

const bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill;

console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total comes to $${
    bill + tip
  }`
);
