/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author Mukhola James <https://github.com/Jamezfn>
 * @returns
 */

export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)){
    return arr.filter(student => student.location === city);
  }
  return [];
}
