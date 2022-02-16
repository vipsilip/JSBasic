//-------------------------------------------------------- BOOLEAN --------------------------------------------------------
function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (6 <= age && age <= 12) return 20000;
  if (12 < age && age < 70) return 50000;
}

//viet 1 ham nhan vao languageCode va tra ve cau xin chao cua ngon ngu tuong ung
//cach 1
function sayHello(languageCode) {
  switch (languageCode) {
    case en: {
      return 'Hello';
      break;
    }
    case vi: {
      return 'Xin chao';
      break;
    }
    case fr: {
      return 'Bonjour';
      break;
    }
    case cn: {
      return 'Nin hao';
      break;
    }
    case ja: {
      return 'Konnichiwa';
      break;
    }
    case ko: {
      return 'Anyoung haseyo';
      break;
    }
    default: {
      return 'Hello';
    }
  }
}

//cach 2
function sayHello(languageCode) {
  const languageCodeMap = {
    en: 'Hello',
    vi: 'Xin chao',
    fr: 'Bonjour',
    cn: 'Nin hao',
    ja: 'Konichiwa',
    ko: 'Anyoung haseyo',
  };
  return languageCodeMap[languageCode] || 'Hello';
}
//-------------------------------------------------------- BOOLEAN --------------------------------------------------------
