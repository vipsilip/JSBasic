//kiem tra so duong chan

//ky thuat cờ hiệu
//cach 1
function isPositiveEvenNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}
console.log(isPositiveEvenNumber(5));
//cach 2
function isPositiveEvenNumber(n) {
  let isValid = false;
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(5));
//cach 3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isPositiveEvenNumber(5));
//cach 4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isPositiveEvenNumber(5));