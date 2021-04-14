var a = parseInt(prompt('첫번째 숫자를 입력하세요.'));
var b = parseInt(prompt('두번째 숫자를 입력하세요.'));
var result = sumMulti(a, b);
console.log(result);

function sumMulti(num1, num2) {
    var result;
    if (num1 == num2) {
        result = num1 * num2;
    } else {
        result = num1 + num2;
    }

    return result;

}
