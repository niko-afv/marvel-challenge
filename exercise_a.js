

function getOddNumbers(numbers){
	return numbers.filter(number => number % 2 != 0);
}

function getMultipliedNumbers(numbers) {
	return numbers.map(number => number * 2);
}

function sumAllNumbers(numbers){
	return numbers.reduce( (acum, value) => acum + value);
}

function sumMultipliedOddNumbersFromList(numberList) {
	const pairs = getOddNumbers(numberList);
	const multiplied = getMultipliedNumbers(pairs);
	const sum = sumAllNumbers(multiplied);
	return sum
}

const numberList = [1,2,3,4,5,6,7];
const sum = sumMultipliedOddNumbersFromList(numberList);
console.log(sum);