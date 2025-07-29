document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Set timestamp
const timestampField = document.getElementById("timestamp");
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// Animate membership cards
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = "all 1s ease-in-out";
    card.style.opacity = 1;
    card.style.marginTop = "0";
  }, index * 300);
});

// Modal handlers
const modalLinks = document.querySelectorAll('.card a');
const modals = document.querySelectorAll('.modal');

modalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.style.display = 'block';
  });
});

modals.forEach(modal => {
  modal.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'none';
  });
});

// Load membership benefits from JSON
fetch("benefits.json")
  .then(res => res.json())
  .then(data => {
    Object.entries(data).forEach(([level, benefits]) => {
      const list = document.querySelector(`#modal-${level.toLowerCase()} ul`);
      if (list) {
        list.innerHTML = benefits.map(b => `<li>${b}</li>`).join("");
      }
    });
  })
  .catch(err => console.error("Error loading membership benefits:", err));
