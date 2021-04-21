var itemList = []; // 아이템 저장할 배열 객체 생성

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addList); // click 이벤트 연결

function addList() {
    var item = document.querySelector('#item').value;
    if (item != null) {
        itemList.push(item);
        const $item = document.querySelector('#item');
        $item.value = '';
        $item.focus();
    }

    showList();
}

function showList() {
    var list = '<ul>';
    for (var i = 0; i < itemList.length; i++) {
        list += '<li>' + itemList[i] + '<span class="close" id="' + i + '">X</span></li>';
    }
    list += '</ul>';

    document.querySelector('#itemList').innerHTML = list;
    
    var remove = document.querySelectorAll('.close'); // 속성에 해당하는 요소 전부 가져오기
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', removeList);
    }

}

function removeList() {
    //console.log(this)
    var id = this.getAttribute('id');
    itemList.splice(id,1);
    showList();
}
