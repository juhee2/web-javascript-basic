var userId = document.querySelector('#user-id');
var pw1 = document.querySelector('#user-pw1');
var pw2 = document.querySelector('#user-pw2');

userId.onchange = checkId;
pw1.onchange = check;
pw2.onchange = comparePw;

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert('아이디는 4~15자리의 영문과 숫자로 입력해 주세요.');
        this.select();
    }
}

function check() {
    if (this.value.length < 8) {
        alert('비밀번호는 8자리 이상 입력해야 합니다.');
        this.value = '';
        this.focus();
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert('입력한 비밀번호가 다릅니다. 다시 입력해 주세요.');
        pw2.value = '';
        pw2.focus();
    }
}

