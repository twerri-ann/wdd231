document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetch('data/discover.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('discoverGrid');
    data.forEach(item => {
      container.innerHTML += `
        <div class="card">
          <h2>${item.title}</h2>
          <figure>
            <img src="${item.image}" alt="${item.title}">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button onclick="location.href='${item.link}'">Learn More</button>
        </div>
      `;
    });
  });

const visitorInfo = document.getElementById('visitorInfo');
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitorInfo.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    visitorInfo.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    visitorInfo.textContent = `You last visited 1 day ago.`;
  } else {
    visitorInfo.textContent = `You last visited ${daysDiff} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
