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
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">${member.membership} Member</p>
      `;
      container.appendChild(card);
    });
  });
