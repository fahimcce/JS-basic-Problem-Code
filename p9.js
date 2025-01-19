const students = [
  { name: "Rahim", grades: [85, 90, 88] },
  { name: "Karim", grades: [75, 80, 78] },
  { name: "Fatima", grades: [92, 95, 94] },
  { name: "Ayesha", grades: [88, 89, 91] },
];

function sortStudentsByAverageGrade(studentArray) {
  return studentArray.sort((a, b) => {
    avgA = a.grades.reduce((sum, num) => sum + num, 0) / a.grades.length;
    avgB = b.grades.reduce((sum, num) => sum + num, 0) / b.grades.length;
    return avgB - avgA;
  });
}

const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);
