// example 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);

// example 2
const grades = ["A","B", "A"];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === "A"){
        points = 4;
    }
    else if (grade === "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
console.log(gpa)

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const longWords = words.filter((word) => word.length > 6);
const shortWords= words.filter((word) => word.length < 6);
console.log(longWords);
console.log(shortWords)


const indices = [];
const myArray = [12, 34, 21, 54, 21];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber)
while (luckyIndex != -1){
    indices.push(luckyIndex);
    luckyIndex = myArray.indexOf(luckyNumber, luckyIndex + 1);
}

console.log(indices);


document.querySelector("#myList").innerHTML = gpaPoints.join(' ');