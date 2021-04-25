var check = document.querySelector('#shippingInfo');
//check.onclick = function() {};
check.addEventListener('click', function() {
    // 라디오 버튼 클릭시 입력 정보 가져와야함!
    var nameInfo = document.querySelector('#billingName').value;
    var tellInfo = document.querySelector('#billingTel').value;
    var addrInfo = document.querySelector('#billingAddr').value;

    if(check.checked) {
        document.querySelector('#shippingName').value = nameInfo;
        document.querySelector('#shippingTel').value = tellInfo;
        document.querySelector('#shippingAddr').value = addrInfo;
    } else {
        document.querySelector('#shippingName').value = '';
        document.querySelector('#shippingTel').value = '';
        document.querySelector('#shippingAddr').value = '';
    }
});
