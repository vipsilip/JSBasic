function isEvenPositiveNumber(n) {
  let flag;
  if (n > 0 && n % 2 === 0) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
}
console.log(isEvenPositiveNumber(5));

function isEvenPositiveNumber(n) {
  let flag = false;
  if (n > 0 && n % 2 === 0) {
    flag = true;
  }
  return flag;
}
console.log(isEvenPositiveNumber(5));

function isEvenPositiveNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEvenPositiveNumber(5));

function isEvenPositiveNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isEvenPositiveNumber(5));

function classifyStudent(mark) {
  let result;
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';
  return result;
}

function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return '';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}

function classifyStudent(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = 'Bad';
      break;
    }
    case 4:
    case 5:
    case 6: {
      result = 'Not Good';
      break;
    }
    case 7:
    case 8: {
      result = 'Good';
      break;
    }
    case 9:
    case 10: {
      result = 'Excellent';
      break;
    }
    default:
      result = 'ko co gia tri';
      break;
  }

  return result;
}

function getErrorMessage(errorCode) {
  let message;

  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }
    case 'E02': {
      message = 'Too many attempts';
      break;
    }
    case 'E03': {
      message = 'Missing data';
      break;
    }

    default:
      message = 'Something went wrong';
      break;
  }

  return message;
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));

function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));

function getTicketPrice(age) {
  let result;
  if (age <= 0 || age > 125) result = -1;
  else if (age < 6 || age >= 70) result = 0;
  else if (age >= 6 && age <= 12) result = 20000;
  else if (age > 12 && age < 70) result = 50000;

  return result;
}
console.log(getTicketPrice(5));
console.log(getTicketPrice(70));
console.log(getTicketPrice(6));
console.log(getTicketPrice(15));
console.log(getTicketPrice(-15));

function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (age >= 6 && age <= 12) return 20000;
  if (age > 12 && age < 70) return 50000;
}
console.log(getTicketPrice(5));
console.log(getTicketPrice(70));
console.log(getTicketPrice(6));
console.log(getTicketPrice(15));
console.log(getTicketPrice(-15));

function sayHello(languageCode) {
  let result;
  switch (languageCode) {
    case 'en': {
      result = 'Hello';
      break;
    }
    case 'vi': {
      result = 'Xin chao';
      break;
    }
    case 'fr': {
      result = 'Bonjour';
      break;
    }
    case 'cn': {
      result = 'Nǐn hǎo';
      break;
    }
    case 'ja': {
      result = 'Konnichiwa';
      break;
    }
    case 'ko': {
      result = 'Anyoung haseyo';
      break;
    }
    default: {
      result = 'Hello';
    }
  }
  return result;
}
console.log(sayHello('en'));
console.log(sayHello('vi'));
console.log(sayHello('fr'));
console.log(sayHello('cn'));
console.log(sayHello('ja'));
console.log(sayHello('ko'));
console.log(sayHello('vv'));

function sayHello(languageCode) {
  const languageCodeMap = {
    en: 'Hello',
    vi: 'Xin chao',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };
  return languageCodeMap[languageCode] || 'Hello';
}
console.log(sayHello('en'));
console.log(sayHello('vi'));
console.log(sayHello('fr'));
console.log(sayHello('cn'));
console.log(sayHello('ja'));
console.log(sayHello('ko'));
console.log(sayHello(''));

function randomNumber(n) {
  if (n <= 0) return -1;
  const number = Math.random() * n;
  return Math.round(number);
}
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

function randomAb(a, b) {
  if (a >= b) return -1;
  const number = Math.random() * (b - a);
  const result = Math.round(number) + a;
  return result;
}
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));
console.log(randomAb(10, 100));

function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

function checkPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}
console.log(checkPerfectSquare(25));
console.log(checkPerfectSquare(8));
console.log(checkPerfectSquare(9));
console.log(checkPerfectSquare(16));
console.log(checkPerfectSquare(10));
console.log(checkPerfectSquare(99));
console.log(checkPerfectSquare(64));

function convertHourstosecond(hours) {
  if (hours <= 0) return -1;

  const CALC_SECOND = 3600;
  return hours * CALC_SECOND;
}
console.log(convertHourstosecond(1));

function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(6, 9, 3));

function findMaxInt(a, b, c) {
  let max = -1;
  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;
  return max;
}
console.log(findMaxInt(6, 10, 13));
console.log(20 / 7);

function getTaxiCount(passengersCount) {
  const TAXI_4 = 4;
  const TAXI_7 = 7;
  if (passengersCount <= 0) return -1;

  if (passengersCount > TAXI_4) return Math.ceil(passengersCount / TAXI_7);
  if (passengersCount <= TAXI_4) return 1;
}
console.log(getTaxiCount(3));
console.log(getTaxiCount(7));
console.log(getTaxiCount(10));
console.log(getTaxiCount(21));

function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;

  if (n.toString().length === 3) {
    const c = n % 10; //1
    const b = Math.trunc((n % 100) / 10); //2
    const a = Math.trunc(n / 100); //3
    let max = c;
    if (a > max) max = a;
    if (b > max) max = b;
    return max;
  }
  if (n.toString().length === 2) {
    const b = n % 10; //1
    const a = Math.trunc(n / 10); //2
    let max = b;
    if (a > max) max = a;
    return max;
  }
  if (n.toString().length === 1) {
    return n;
  }
}
console.log(getMaxDigit(010));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));

function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;
  //010
  const ones = n % 10; //0
  const tens = Math.trunc((n % 100) / 10); //1
  const hundreds = Math.trunc(n / 100); //0
  let max = ones;
  if (hundreds > max) max = hundreds;
  if (tens > max) max = tens;
  return max;
}
console.log(getMaxDigit(020));
console.log(getMaxDigit(012));
console.log(getMaxDigit(123));
console.log(getMaxDigit(005));
console.log(Math.trunc((70 % 100) / 10));

function compareNumbers(a, b) {
  if (a < 0 || b < 0) return 'ko hop le';

  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
console.log(compareNumber(-3, 5));
console.log(compareNumber(9, 7));
console.log(compareNumber(7, 7));

function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100) === 0 ? null : Math.trunc(n / 100);
  if (n < 1000 && ones === hundreds) return true;
  if (n < 100 && ones === tens) return true;
  if (n < 10) return true;
  return false;
}
console.log(isSymmetricNumber(-1));
console.log(isSymmetricNumber(21));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(123));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(353));
console.log(isSymmetricNumber(351));

function isSymmetricNumber(n) {
  if (n < 0 || n > 999) return false;

  if (n < 10) return true;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  let reverseNumber = ones * 100 + tens * 10 + hundreds;

  if (n <= 99) reverseNumber = ones * 10 + tens;

  if (n === reverseNumber) return true;
  return false;
}
console.log(isSymmetricNumber(1000));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(123));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(353));
console.log(isSymmetricNumber(351));
