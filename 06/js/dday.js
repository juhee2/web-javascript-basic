var now = new Date();

var firstDay = new Date('2020-06-22');

// 날짜 연산을위해 milliseconds로 바꾸기
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector('#accent').innerText = passedDay + '일';

// 100, 200 .. 일 후 의 날짜값을 알기위해 기준날짜에 더할 날짜를 밀리초로 바꿔서 더하기!
// var future = toFirst + (100 * (1000 * 60 * 60 * 24));
// var someday = new Date(future); // future 값으로 날짜 객체 생성

// var year = someday.getFullYear();
// var month = someday.getMonth() + 1;
// var day = someday.getDate();

// document.querySelector('#date100').innerText = year + '년 ' + month + '월 ' + day + '일';

function calDate(days) {
    var future = toFirst + (days * (1000 * 60 * 60 * 24));
    var someday = new Date(future); // future 값으로 날짜 객체 생성

    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var day = someday.getDate();

    document.querySelector('#date' + days).innerText = year + '년 ' + month + '월 ' + day + '일';
}

calDate(100);
calDate(200);
calDate(365);
calDate(500);