export default function appendToEachArrayValue(array, appendString) {
	const newArray = []
	for (let [idx, value] of array.entries()) {
		array[idx] = appendString + value;
	}
	return array;
}
