export default function createInt8TypedArray(length, position, value) {
	if (position < 0 || position >= length) {
		throw new Error('Position outside range')
	}
	if (typeof length === 'number' && typeof position === 'number' && typeof value === 'number') {
		const buffer = new ArrayBuffer(length);
		const view = new DataView(buffer);
		view.setInt8(position, value);

		return view;
	}
}
