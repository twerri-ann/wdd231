document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 230", name: "Web Frontend Development I", credits: 2, completed: false },
  { code: "CSE 110", name: "Intro to Programming", credits: 2, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true},
  { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: true}
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


const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
