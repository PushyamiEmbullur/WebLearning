var x="Hello globe!";
console.log(x);
function a() {
	var x="Hello India inside globe";
	console.log("Message "+x);
	function b() {
	console.log("Message "+x)
	// body...
}
	b();
	// body...
}

// function b() {
// 	console.log("Message "+x)
// 	// body...
// }

a();


function fastfood(order){
	order=order|| "pizza"
	console.log("Menu is "+order)
}
fastfood();



var num=10;
if( (null)|| (console.log("Hello"))|| num>5) {
	console.log("Hello")
}


