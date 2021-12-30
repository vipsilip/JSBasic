function sayHello(languageCode) {
    const languageCodeMap = {
        en : 'Hello',
        vi : 'Xin chao',
        fr : 'Bonjour',
        cn : 'Nin hao',
        ja : 'Konichiwa',
        ko : 'Anyoung haseyo',
    };
    const message= languageCodeMap[languageCode] || 'Hello';
    return message;
}