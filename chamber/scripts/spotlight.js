fetch('data/members.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => {
    // If data is an array of members directly:
    const goldSilver = data.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );

    // Shuffle and select 3
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-container');
    spotlights.forEach(member => {
      // Destructure member properties
      const { name, image, address, phone, website, membership } = member;

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
  })
  .catch(error => {
    document.getElementById('spotlight-container').innerHTML = `<p>Error loading members: ${error.message}</p>`;
    console.error(error);
  });
