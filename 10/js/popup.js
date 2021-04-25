function openPopup() {
    var newWin = window.open('popup.html', '', 'width=400, height=400');
    // 웹 브라우저에서 팝업을 차단하면 window.open() 시 null 을 반환
    // chrome은 기본으로 팝업 차단되어 있기 때문에 확인 필요!
    if (newWin == null) {
        alert('팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침 해주세요.');
    }
}

window.onload = openPopup;