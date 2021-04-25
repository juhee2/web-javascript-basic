var userId = document.querySelector('#user-id');
var pw1 = document.querySelector('#user-pw1');
var pw2 = document.querySelector('#user-pw2');

userId.onchange = checkId; // 내용 변경 후 포커스 아웃 시 발생
pw1.onchange = checkPw; // 비밀번호 자릿수 확인
pw2.onchange = comparePw; // 비밀번호가 서로 같은지 확인

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert('4~15자리의 영문과 숫자를 사용하세요.');
        userId.select(); // 필드 선택
    }
}

function checkPw() {
    if (pw1.value.length < 8) {
        alert('비밀번호는 8자리 이상이여야 합니다.');
        pw1.value = '';
        pw1.focus();
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert('암호가 서로 다릅니다. 다시 입력해 주세요.');
        pw2.value = '';
        pw2.focus();
    }
}