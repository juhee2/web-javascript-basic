function newRegister() {
    var newP = document.createElement('p'); // p 요소 생성
    var userName = document.querySelector('#userName');
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText); // 요소 노드에 자식 노드로 텍스트 노드 연결

    var delBtn = document.createElement('span');
    var delText = document.createTextNode('X');
    delBtn.setAttribute('class', 'del'); // 속성 노드 추가
    delBtn.appendChild(delText);
    newP.appendChild(delBtn); // del버튼을 p태그의 자식 노드로 추가
    
    //document.querySelector('#nameList').appendChild(newP); // nameList의 자식노드로 newP 연결
    var nameList = document.querySelector('#nameList');
    // 둘이 같은 역할
    //document.querySelector('#nameList').insertBefore(newP, nameList.childNodes[0]);
    nameList.insertBefore(newP, nameList.children[0]);
    
    userName.value = ''; // 다음 이름 입력할수 있도록 input 초기화

    var removeBtns = document.querySelectorAll('.del');
    for (var i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', function() {
            if (this.parentNode.parentNode) { // this span태그
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}