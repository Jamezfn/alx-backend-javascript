/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Mukhola James <https://github.com/Jamezfn>
 * @returns {Number}
 */

export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
