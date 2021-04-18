var now = new Date();
var firstDay = new Date('1997-06-13');

var toNow = now.getTime();
var tofirst = firstDay.getTime();

var passedDay = Math.round((toNow - tofirst) / (1000 * 60 * 60 * 24));

document.querySelector('#accent').innerText = passedDay + '일';

calDate(100);
calDate(200);
calDate(365);
calDate(500);

function calDate(days) {
    var future = tofirst + (days * 1000 * 60 * 60 * 24); // 밀리초로 바꿔서 더해주기
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var day = someday.getDate();

    document.querySelector('#date' + days).innerText = year + '년 ' + month + '월 ' + day + '일';
}
