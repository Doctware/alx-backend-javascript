function updateStudentGradeByCity(students, city, newGrades) {
	if (!Array.isArray(students) || !Array.isArray(newGrades)) {
		return [];
	}

	return students
		.filter(student => student.location => city)
		.map(student => {
			const studentGrade = newGrade.find(grade => grade.studentId === student.id);
			return {
				grade: studebtGrade ? studentgrade.grade : N/A
			}
		})
}

export default updateStudentGradeByCity;


