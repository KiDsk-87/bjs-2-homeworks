// Задача №1.
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
    sum += arr[i];
  }
  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задача №2.
function summElementsWorker(...arr) {
  return arr.reduce((sum, current)=> sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length ===0){
    return 0;
  }
  Math.min(...arr);
  Math.max(...arr);
  return Math.max(...arr) - Math.min(...arr)
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length === 0){
      return 0;
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  return sumEvenElement / countEvenElement;
}

// Задача №3.
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach(arr => {
    const result = func(...arr)
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  });
  return maxWorkerResult;
}
