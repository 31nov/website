// 문제1
function first(num){
    return num = num*num*num;
}

console.log(first(3));
console.log(first(5));

// 문제2
function second(num){
	return num[num.length] = '번호 끝';
}

var arr = ['하나','둘','셋'];
second(arr);
console.log(arr);

// 문제3
function third(num1, num2){
	num = num1 % num2;
	console.log(num);
}

third(2,1);
third(3,2);
third(4,2);
third(4,3);
third(5,2);
third(5,3);
third(5,4);
third(100,3);
third(100,25);

// 문제4
function fourth(num){
	console.log(typeof num);
}

var 타입1 = fourth('문자열');
var 타입2 = fourth(3.5);

// 문제5
function fifth(num){
	var length = num.length;
	for (var i = length-length; i <= length-1; i++) {
		console.log(num[i]);
	};
}
var arr = fifth(['1','2','3','4','5','6']);
