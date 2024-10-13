import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('amount must be a number');
		}
		this._amount = value;
	}

	/**
	 * Getter for the currency.
	 * @returns {Currency} The associated currency of the pricing.
	 */
	get currency() {
		return this._currency;
	}

	/**
	 * Setter for currency.
	 * @param {Currency} value - The currency to set the pricing.
	 */
	set currency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('currency must be a Currency');
		}
		this._currency = value;
	}


	/**
	 * Creates a full string representation of the price.
	 * @returns {String} A formatted string showing the amount and cuurency
	 */
	displayFullPrice() {
		return`${this.amount} ${this.currency.name} (${this.currency.code})`;
	}

	/**
	 * Converts a given amount using a specified conversion rate.
	 * @param {Number} amount - The amount to comvert.
	 * @param {Number} conversionRate - The rate used for conversion.
	 * @returns {Number} The converted amount.
	 */
	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number') {
			throw new TypeError('amount must be a number');
		}
		if (typeof conversionRate !== 'number') {
			throw new TypeError('conversionRate must be a number');
		}
		return amount * conversionRate;
	}
}
