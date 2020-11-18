//  ===================== if else ===================//

// 1.

function bool(a, b) {
  if (!a || !b) {
    return "Введите Число";
  }

  if (typeof (a, b) === "number") {
    return number;
  }

  if (a % 2 == 0) {
    return a * b;
  } else {
    return a + b;
  }
}

console.log(bool(3, 6));

// 2.

function findQuarter(x, y) {
  if (x > 0 && y > 0) {
    return "1 cetvert";
  } else if (x < 0 && y > 0) {
    return "2 cetvert";
  } else if (x < 0 && y < 0) {
    return "3 cetvert";
  } else if (x > 0 && y < 0) {
    return "4 cetvert";
  } else {
    console.log("tocka lejit v osi");
  }
}

console.log(findQuarter(-5, 4));

// 3.

function sum(a, b, c) {
  if (a >= 0 && b >= 0 && c >= 0) {
    return a + b + c;
  } else if (a <= 0 && b <= 0 && c <= 0) {
    return "vvedite polojitelnoye cislo";
  } else if (a >= 0 && b >= 0 && c <= 0) {
    return a + b;
  } else if (a >= 0 && b <= 0 && c >= 0) {
    return a + c;
  } else if (a <= 0 && b >= 0 && c >= 0) {
    return b + c;
  } else if (a <= 0 && b <= 0 && c >= 0) {
    return c;
  } else if (a <= 0 && b >= 0 && c <= 0) {
    return b;
  } else if (a >= 0 && b <= 0 && c <= 0) {
    return a;
  } else {
    return "Error";
  }
}

console.log(sum(2, -5, -5));

function threeNum(a, b, c) {
  if (typeof a == "number" || typeof b == "number" || typeof c == "number") {
    return "vvedite cislo";
  }

  if (!a || !b || !c) {
    return "error";
  }
  let box = 0;

  if (a > 0) {
    box += a;
  }
  if (b > 0) {
    box += b;
  }
  if (c > 0) {
    box += c;
  }

  return box;
}

console.log(threeNum(3, 4, -5));

// 4.

function numMax(a, b, c) {
  let result = 0;
  let x = a * b * c;
  let y = a + b + c;

  if (x > y) {
    result = x;
  } else {
    result = y;
  }

  return result + 3;
}

console.log(numMax(2, 1, 3));

// 5.
function appraisal(a) {
  if (a >= 0 && a <= 19) {
    return "F";
  } else if (a >= 20 && a <= 39) {
    return "E";
  } else if (a >= 40 && a <= 59) {
    return "D";
  } else if (a >= 60 && a <= 74) {
    return "C";
  } else if (a >= 75 && a <= 89) {
    return "B";
  } else if (a >= 90 && a <= 100) {
    return "A";
  }
}

console.log(appraisal(51));

// ================== Cikli ==================
// ===========================================

// 1.

function sumEven() {
  let num = 0;
  let kol = 0;
  for (i = 0; i <= 99; i++) {
    if (i % 2 == 0) {
      num += i;
      kol++;
    }
  }

  console.log(num);
  console.log(kol);
  return;
}

sumEven();

// 2. --------------------

function simpleNum(n) {
  if (n === 1) {
    return "dsadsa";
  } else {
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        return "murekkeb";
      }
    }
  }
}

console.log(simpleNum(7));

// 3.-----------------

// 4.

function factorial(a) {
  let number = 1;

  if (a > 1) {
    for (i = 1; i <= a; i++) {
      number *= i;
    }
  }
  return number;
}
console.log(factorial(5));

// 5.

function numSum(num) {
  let string = num.toString();

  let sum = 0;

  for (i = 0; i < string.length; i++) {
    sum += +string[i];
  }

  return sum;
}

console.log(numSum(23));

// 6.

function mirror(num) {
  let string = num.toString();

  let getMirror = "";

  for (let i = string.length - 1; i >= 0; i--) {
    getMirror += string[i];
  }

  return getMirror;
}

console.log(mirror(123));

// ======================== Arr ==============
// ===========================================

// 1.

function minArr(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let result = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  return result;
}

console.log(minArr([4, 3, 67, 86, 54, 55, 46, 78]));

// 2.

function maxArr(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }
  let result = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
}
console.log(maxArr([2, 3, 4, 5, 6, 7, 8, 100]));

// 3.
function minIndex(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[result]) {
      result = i;
    }
  }

  return result;
}

console.log(minIndex([2, 3, 4, 5, 6, 7, 8]));

// 4.

function maxIndex(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[result]) {
      result = i;
    }
  }

  return result;
}

console.log(maxIndex([2, 3, 4, 5, 6, 7, 8, 9]));

// 5.

function sumElements(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let result = 0;

  for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log(sumElements([1, 2, 3, 4, 5, 6, 7, 8]));

// 6.

function reversArr(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let newArr = [];

  for (i = arr.length - 1; i >= 0; i--) {
    newArr[arr.length - 1 - i] = arr[i];
  }

  return newArr;
}

console.log(reversArr([1, 2, 3, 4, 5, 6, 7]));

// 7.

function oddElements(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let result = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      result++;
    }
  }
  return result;
}

console.log(oddElements([1, 3, 5]));

// 8.

function halfArr(arr) {
if(!Array.isArray(arr)){
    return 'type array'
}
  let half = arr.length / 2;
  let result = half + (arr.length % 2);

  for (i = 0; i < result; i++) {
    const current = arr[i];
    arr[i] = arr[result + i];
    arr[result + i] = current;
  }

  return arr;
}

console.log(halfArr([1, 2, 3, 4]));

// 9.
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    var wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 5]));

// ============== function ===================
// ===========================================

// 1.

function dayOfWeek(a) {
  switch (a) {
    case 1:
      day = "понедельник";
      break;
    case 2:
      day = "вторник";
      break;
    case 3:
      day = "среда";
      break;
    case 4:
      day = "четверг";
      break;
    case 5:
      day = "пятница";
      break;
    case 6:
      day = "суббота";
      break;
    case 7:
      day = "воскресенье";
      break;
    default:
      day = "Напишите число";
  }

  return day;
}

console.log(dayOfWeek(8));

// 2.

function numbers(num) {
  let numbers1 = [
    "ноль",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];

  let numbers2 = [
    "сто",
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];

  let numbers3 = [
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];


}
