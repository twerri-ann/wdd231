const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 230", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Intro to Programming", credits: 2, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false }
];

const coursesDiv = document.getElementById('courses');
const totalCreditsSpan = document.getElementById('total-credits');

function displayCourses(filter) {
  coursesDiv.innerHTML = '';
  let filtered = courses;

  if (filter === 'WDD') {
    filtered = courses.filter(c => c.code.startsWith('WDD'));
  } else if (filter === 'CSE') {
    filtered = courses.filter(c => c.code.startsWith('CSE'));
  }

  filtered.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course';
    if (course.completed) div.classList.add('completed');
    div.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    coursesDiv.appendChild(div);
  });

  const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsSpan.textContent = totalCredits;
}

// Initial display
displayCourses('All');

// Filter buttons
document.getElementById('all-btn').addEventListener('click', () => displayCourses('All'));
document.getElementById('wdd-btn').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('cse-btn').addEventListener('click', () => displayCourses('CSE'));


const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;
