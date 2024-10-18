import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

const students = getListStudents();
console.log('All students:', students);

// console.log(getStudentsByLocation(students, 'San Fransisco'));
const filteredStudents = getStudentsByLocation(students, 'San Francisco');
console.log('Filtered students:', filteredStudents);
