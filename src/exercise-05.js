// Viết hàm lấy giá vé tương ứng theo số tuổi
// Khi khách hàng vào tham quan khu du lịch, tuỳ thuộc vào độ tuổi mà có giá vé khác nhau.
// Hãy viết một hàm nhận vào số tuổi của khách hàng, trả về giá vé tương ứng.
// Bảng giá như sau:
// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000 VND
// Trên 12 tuổi thì đồng giá 50.000 VND
// Viết hàm function getTicketPrice(age)  để giúp mình lấy được giá tiền khi biết tuổi của khách hàng nhé.
// Trả về là một con số nguyên:
// -1 nếu dữ liệu không hợp lệ
// 0 nếu free
// các giá tiền nếu tuổi hợp lệ
// Giả sử người sống thọ nhất là 125 tuổi.
function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (6 <= age && age <= 12) return '20000 VND';
  if (12 < age && age < 70) return '50000 VND';
}
console.log(getTicketPrice(126));
console.log(getTicketPrice(0));
console.log(getTicketPrice(5));
console.log(getTicketPrice(70));
console.log(getTicketPrice(6));
console.log(getTicketPrice(13));

// Say hello bằng nhiều ngôn ngữ
// Viết hàm sayHello(languageCode) nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.
// languageCode = 'en' --> Hello
// languageCode = 'vi' --> Xin chào
// languageCode = 'fr' --> Bonjour
// languageCode = 'cn' --> Nǐn hǎo
// languageCode = 'ja' --> Konnichiwa
// languageCode = 'ko' --> Anyoung haseyo
// Trường hợp không truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"
// Link để copy các ngôn ngữ khác nhau: click here
// Mọi người chú ý, copy các chuỗi trả về cho nó đúng nhé, đừng tự gõ nhen!
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
    vi: 'Xin chào',
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
console.log(sayHello('va'));
//--------------------------------------------------------END BOOLEAN --------------------------------------------------------
