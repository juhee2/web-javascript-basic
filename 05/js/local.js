var myVar = 100; // 전역변수
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50; // var 는 재선언 가능
}