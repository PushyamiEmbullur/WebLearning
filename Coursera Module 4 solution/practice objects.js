function mathmultiplier(multiplier) {
	var myfun1= function (s) {
		return multiplier * s;
	};
	return myfun1;
}

//console.log(mathmultiplier(10));
var operation=mathmultiplier(10);
console.log(operation(10));
var doubleall=mathmultiplier(2);
console.log(doubleall(3));