export default class HolbertonClass {
	constructor(size, location) {
		this.size = size;
		this.location = location;
	}

	get size() {
		return this._size;
	}

	set size(value) {
		this._size = value;
	}

	get location() {
		return this._location;
	}

	set location(value) {
		this._location = value;
	}

	/**
	 * Customizes the primitive value conversion for the 
	 *	HolbertonClass instance.
	 * @param {String} hint - The type hint for the conversion 
	 *	('number', 'string', etc.).
	 * @returns {Number|String|Object} The size for 'number', 
	 *	location for 'string', or the object itself.
	 */
	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return this.size;
		}
		if (hint === 'string') {
			return this.location;
		}
		return this;
	}
}
