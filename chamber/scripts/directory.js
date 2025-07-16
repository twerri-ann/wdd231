// Footer Year and Last Modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// DOM elements
const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

// Fetch members data and render
async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    membersContainer.innerHTML = `<p>Failed to load members: ${error.message}</p>`;
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = ''; // clear previous content

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>Phone: <a href="tel:${member.phone}">${member.phone}</a></p>
      <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
      <p>Membership Level: ${membershipText(member.membership)}</p>
    `;

    membersContainer.appendChild(card);
  });
}

// Helper function to convert membership number to text
function membershipText(level) {
  switch(level) {
    case 3: return "Gold";
    case 2: return "Silver";
    case 1: return "Member";
    default: return "Member";
  }
}

// Event listeners for toggle buttons
gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid-view');
  membersContainer.classList.remove('list-view');
  gridBtn.setAttribute('aria-pressed', 'true');
  listBtn.setAttribute('aria-pressed', 'false');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
  gridBtn.setAttribute('aria-pressed', 'false');
  listBtn.setAttribute('aria-pressed', 'true');
});

// Load members on page load
getMembers();

// Simple nav toggle for mobile
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
