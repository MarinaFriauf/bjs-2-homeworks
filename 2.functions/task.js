//Задача 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } if (arr[i] > max) {
      max = arr[i]
    }
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

//Задача 2

function summElementsWorker(...arr) {
  let addition = arr.reduce((sum, current) => sum + current, 0);
  return addition;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
  return 0;
} 

let min = Math.min(...arr);
let max = Math.max(...arr);
return max-min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0){
  return 0;
} 

for (element of arr){
  if ((element % 2) === 0) {
    sumEvenElement += element;
  } else {
    sumOddElement += element;
  }
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0){
    return 0;
  } 
  for (element of arr){
    if ((element % 2) === 0) {
      sumEvenElement += element;
      countEvenElement ++; };
  }
  return sumEvenElement / countEvenElement;
}

//Задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let answer = -Infinity;

  for (element of arrOfArr){
   answer= func(...element);
    if (maxWorkerResult < answer) {
     maxWorkerResult = answer;
  }
}
return maxWorkerResult;
}