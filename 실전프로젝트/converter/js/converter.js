var sourceUnit = document.querySelector('#s-unit');
var targetUnit = document.querySelector('#t-unit');
var exchange = document.querySelector('#exchange');
var source = document.querySelector('#s-value');
var target = document.querySelector('#t-value');
var convert = true; // 섭씨 -> 화씨 true, 화씨 -> 섭씨 false

exchange.onclick = () => {
    source.value = '';
    target.value = '';

    var temp = sourceUnit.innerText;
    sourceUnit.innerText = targetUnit.innerText;
    targetUnit.innerText = temp;
    convert = convert ? false : true;
};

source.onkeyup = () => {
    var result;
    if (convert) {
        // 섭씨 -> 화씨
        result = (source.value * 1.8) + 32;
    } else {
        // 화씨 -> 섭씨
        result = (source.value - 32) / 1.8;
    }
    target.value = result;
};


