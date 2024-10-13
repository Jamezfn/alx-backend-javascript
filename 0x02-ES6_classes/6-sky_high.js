import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this.floors = floors;
	}

	get floors() {
		return this._floors;
	}

	set floors(value) {
		this._floors = value;
	}


	/**
	 * Provides a warning message for building evacuation.
	 * @returns {String} A string indicating the no. of floors to evacute
	 */

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this.floors} floors`;
	}
}
