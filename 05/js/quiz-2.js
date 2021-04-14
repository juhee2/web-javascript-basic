var a = parseInt(prompt('비교할 첫 번째 숫자: '));
var b = parseInt(prompt('비교할 두 번째 숫자: '));
compare(a, b);

function compare(num1, num2) {
   var message = '';
    if (num1 > num2) {
        message = num1 + '(이)가' + num2 + '보다 큽니다.';
    } else if (num2 > num1) {
        message = num2 + '(이)가' + num1 + '보다 큽니다.';
    } else {
        message = '두수는 서로 같습니다.';
    }

    alert(message);
}