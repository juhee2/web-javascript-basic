var price = 24000;

var checkboxs = document.querySelectorAll('.checkbx');
for (var i = 0; i < checkboxs.length; i++) {
    //checkboxs[i].addEventListener('click', addOrder);
    checkboxs[i].onclick = addOrder;
}

function addOrder() {
    if (this.checked) {
        price += parseInt(this.value);
    } else {
        price -= parseInt(this.value);
    }
    document.querySelector('#total').value = price + '원';
}


