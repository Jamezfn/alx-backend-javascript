export default class Airport {
	constructor(name,code) {
		this.name = name;
		this.code = code;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get code() {
		return this._code;
	}

	set code(value) {
		this._code = value;
	}

	/**
	 * Customizes the output of Object.prototype.toString when 
	 * used with the airport instance.
	 * @returns {String} The airport code as the string tag.
	 */
	get [Symbol.toStringTag]() {
		return this._code;
	}
}
