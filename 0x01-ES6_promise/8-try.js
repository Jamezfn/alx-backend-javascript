export default function divideFunction(numerator, denominator) {
	if (denominator === 0) {
		throw Error('cannot divede by 0');
	} else {
		return numerator / denominator;
	}
}
