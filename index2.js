const students = [
  {
    studentId: 1,
    name: "Alice Johnson",
    subjects: [
      {
        subjectName: "Mathematics",
        teacher: "Mr. Smith",
        grades: {
          midterm: 88,
          final: 92,
          homework: [
            { assignmentId: 1, score: 85 },
            { assignmentId: 2, score: 90 },
            { assignmentId: 3, score: 95 },
          ],
        },
      },
      {
        subjectName: "History",
        teacher: "Mrs. Davis",
        grades: {
          midterm: 75,
          final: 80,
          homework: [
            { assignmentId: 1, score: 70 },
            { assignmentId: 2, score: 85 },
            { assignmentId: 3, score: 90 },
          ],
        },
      },
    ],
  },
  {
    studentId: 2,
    name: "Bob Williams",
    subjects: [
      {
        subjectName: "Science",
        teacher: "Dr. Brown",
        grades: {
          midterm: 91,
          final: 87,
          homework: [
            { assignmentId: 1, score: 89 },
            { assignmentId: 2, score: 93 },
            { assignmentId: 3, score: 88 },
          ],
        },
      },
      {
        subjectName: "English",
        teacher: "Ms. Green",
        grades: {
          midterm: 84,
          final: 89,
          homework: [
            { assignmentId: 1, score: 82 },
            { assignmentId: 2, score: 87 },
            { assignmentId: 3, score: 91 },
          ],
        },
      },
    ],
  },
];

let grad1 = students[0].subjects[1].grades.homework[0].score;
let grad2 = students[0].subjects[1].grades.homework[1].score;
let grad3 = students[0].subjects[1].grades.homework[2].score;

console.log(grad1 + grad2 + grad3);
