let grades = ["C", "C", "C"];
let numGrade = 0;
let sum = 0;
let numAve = 0;
function calculateGPA(arr) {
  let message = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      numGrade = 100;
    } else if (arr[i] === "B") {
      numGrade = 80;
    } else if (arr[i] === "C") {
      numGrade = 70;
    } else {
      console.log("Please enter valid alphabetic Grade entries (A, B, C)");
    }
    sum = sum + numGrade;
  }
  numAve = sum / arr.length;
  console.log(sum);
  console.log(numAve);
  if (numAve <= 100 && numAve >= 85) {
    document.write("Your GPA is A");
  } else if (numAve < 85 && numAve >= 78) {
    document.write("Your GPA is B");
  } else if (numAve === 70) {
    document.write("C's get degrees.");
  } else {
    document.write("Your GPA is C");
  }
}
calculateGPA(grades);
