function ClassifyStudent(mark) {
  let result;
  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = 'bad';
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = 'not good';
      break;
    }

    case 7:
    case 8: {
      result = 'good';
      break;
    }

    case 9:
    case 10: {
      result = 'excellence';
      break;
    }

    default: {
      result = 'invalid';
    }
  }
  return result;
}
console.log(ClassifyStudent(10));
