var num1 = parseInt(prompt('첫번째 숫자는? ')); // prompt로 받은 값은 string
var num2 = parseInt(prompt('두번째 숫자는? '));
var result = addNumber(num1, num2);
alert('두 수를 더한 값은 ' + result + '입니다.');10
function addNumber(a, b) {
    var sum = a + b;
    return sum;
}