export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr) && Array.isArray(newGrades) && typeof city === 'string') {
    return arr
      .filter((student) => student.location === city)
      .map((student) => {
        const match = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
	return {
	  ...student,
	  grade: match ? match.grade : 'N/A',
	};
      });
  }
  return [];
}
