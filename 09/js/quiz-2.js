var btn = document.querySelector('#start');
btn.onclick = calCircle;

function calCircle() {
    var radius = document.querySelector('#radius').value;

    var round = Math.PI * 2 * radius;
    var area = Math.PI * Math.pow(radius, 2);

    document.querySelector('#round').value = round;
    document.querySelector('#area').value = area;
}