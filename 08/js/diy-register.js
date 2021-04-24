function fnRegister() {
    var userName = document.querySelector('#userName');
    var nameList = document.querySelector('#nameList');

    var newP = document.createElement('p');
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBtn = document.createElement('span');
    var delText = document.createTextNode('X');
    delBtn.appendChild(delText);
    delBtn.setAttribute('class', 'del');
    newP.appendChild(delBtn);

    nameList.insertBefore(newP, nameList.children[0]);
    userName.value = '';

    var delBtns = document.querySelectorAll('.del');
    for (var i = 0; i < delBtns.length; i++) {
        delBtns[i].addEventListener('click', function() {
            if (this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}

