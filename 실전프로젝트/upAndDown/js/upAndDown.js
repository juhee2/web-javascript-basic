var random = Math.floor(Math.random() * 100) + 1; // 1 ~ 100 까지 random 숫자 생성
var cnt = 0;
/*
    keypress 이벤트는 더이상 권장되지 않음
    beforeinput 또는 keydown을 사용하는 것을 권장!!
*/
document.querySelector('#try').onkeydown = function (e) {
    if (e.keyCode == 13) { // enter key 눌렀을때
        finding();
        //return; // 키 누르기 처리 중지!
        e.preventDefault(); // 기본 이벤트 제거
    }
};
function finding() {
    var input = document.querySelector('#try');
    var display = '';
    if (input.value >= 1 && input.value <= 100) {
        cnt++;
        if (input.value > random) display = 'DOWN!';
        else if (input.value < random) display = 'UP!';
        else display = '맞혔습니다!';
        document.querySelector('#display').innerText = display;
        document.querySelector('#counter').innerText = '시도 횟수 : ' + cnt;
    } else {
        alert('1에서 100 사이의 수를 입력해 주세요.');
        input.value = ''
        input.focus();
    }
}

