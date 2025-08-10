/**
 * Retrieves a list of students.
 * @author Mukhola Jamess <https://github.com/Jamezfn>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents(id, firstName, location) {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}
