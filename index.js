//Problem 1
function math(n,m) {
	var sum = n + m;
	console.log(sum);
}math(2,9)

function times(b,r){
	var sum = b * r;
	console.log(sum)
}times(9,5)

function devide(l,e){
	var sum = l / e;
	console.log(sum)
}devide(4,2)

//Problem 2

var cararray = [['Vanquish','Valkyrie','DB9'],['325i','X5','3 Series'],['Flying Spur','Mulsanne','Bentayga']];
console.log(cararray[2][1]);

//Problem 3

var num = prompt('What is your favorite number?');
if(parseInt(num) < 100){
	alert('Less than 100')
}else{
	parseInt((num) > 100)
	alert('More than 100')
}