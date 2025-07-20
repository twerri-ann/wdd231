fetch('data/members.json')
  .then(res => res.json())
  .then(data => {
    const goldSilver = data.members.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );
    
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-container');
    spotlights.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${image}" alt="${name} logo">
        <h3>${name}</h3>
        <p>${address}</p>
        <p>${phone}</p>
        <a href="${website}" target="_blank">Visit Website</a>
        <p class="level">${membership} Member</p>
      `;
      container.appendChild(card);
    });
  });
