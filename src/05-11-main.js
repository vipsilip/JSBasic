function getError(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errorMap[errorCode] || 'something went wrong';
}
console.log(getError('E01'));
console.log(getError('E02'));
console.log(getError('E03'));
console.log(getError('E04'));
