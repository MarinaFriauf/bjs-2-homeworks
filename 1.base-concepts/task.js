"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2) - 4 * a * c;

  if (d == 0) {
    let solution = (-b/(2*a));
    arr.push(solution);
  } 

  if (d > 0) {
    let solution = (-b + Math.sqrt(d) )/(2*a);
    arr.push(solution);
    solution = (-b - Math.sqrt(d) )/(2*a);
    arr.push(solution);
  }

  return arr;
}