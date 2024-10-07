const checkLength = (string = '', maxLength = 1) => (string.length <= maxLength);

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function checkPalindrome(string = '' ) {
  const normalString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';

  for (let i = normalString.length - 1; i >= 0; i--) {
      reversedString += normalString[i];
  }
  return normalString === reversedString;
}
checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
