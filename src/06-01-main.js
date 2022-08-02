// random trong khoang tu a den b
// random [a,b] trong do a < b
// random [0,n]
// Math.random() --> [0,1): chi tra tu 0 den gan 1
function randomNumberInRange(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);

  return Math.round(random) + a;
}
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));

function randomNumberInRange(n) {
  if (n < 0) return -1;

  const random = Math.random() * n;
  return Math.round(random);
}
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
console.log(randomNumberInRange(5.4));
