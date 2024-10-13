/**
 * Represents a Holberton Course.
 * This class models a course with a name, length (in months), 
 * and a list of students.
 */
export default class HolbertonCourse {
	/**
	 * Creates a new instance of HolbertonCourse.
	 *
	 * @param {String} name - The name of the course.
	 * @param {Number} length - How long the course is (in months).
	 * @param {String[]} students - The names of students in the course.
	 */
	constructor(name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}


	/**
	 * Gets the name of this course.
	 * @returns {String} The name of the course.
	 */
	get name() {
		return this._name;
	}


	/**
	 * Sets the name of this course.
	 * Ensures that the value is a string, otherwise throws a TypeError.
	 * @param {String} value - The name to set for the course.
	 */
	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = value;
	}


	/**
	 * Gets the length of this course (in months)
	 * @returns {Number} The length of the course.
	 */
	get length() {
		return this._length;
	}


	/**
	 * Sets lenth of this course (in months)
	 * Ensures the value is a number, else throws in TypeError
	 * @params {Number} - The length to set for the coarse.
	 */
	set length(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Length must be a number');
		}
		this._length = value;
	}


	/**
	 * Gets the names of the students in this course
	 * @returns {String[]} An array of students name
	 */
	get students() {
		return this._students;
	}


	/**
	 * Sets the names of students in this course
	 * Ensures the values is an array of strings, else throws a TypeError
	 * @param {string[]} value - The list of students names
	 */
	set students(value) {
		if (!(value instanceof Array)) {
			throw new TypeError('Students must be an array of strings');
		}
		if (!value.every((student) => typeof student === 'string')) {
			throw new TypeError('Students must be an array of strings')
		}
		this._students = value;
	}
}
