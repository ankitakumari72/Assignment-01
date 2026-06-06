const courses = [
  { name: "JavaScript", category: "Programming" },
  { name: "Photoshop", category: "Design" },
  { name: "React", category: "Programming" }
];

const programmingCourses = courses.filter(
  course => course.category === "Programming"
);

console.log(programmingCourses);