function doSomeMath(a, b) {
	function multiply() {
		var sum  = a * b; //here a and b are not declared but this function use them from its parent , this is called a closure
		return sum;
	}
	return multiply();
} // closure are A function that remembers the environment they were created in.
// so closure in this program is multiply

var theResult = doSomeMath(10, 20);
console.log("The result: ", theResult);
var resultTwo = doSomeMath(20, 20);
console.log("The result: ", resultTwo);
