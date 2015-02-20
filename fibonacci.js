/* Please put your code here for how to generate a Fibonacci number.
*/

//This function returns the ith Fibonacci number in the Fiboncacci Sequence.
//@param index the index of the desired Fibonacci number
function fibonacci(index) {
	if(index > 2) {
		return fibonacci(index - 1) + fibonacci(index - 2)
	} else {
		return index;
	}
}