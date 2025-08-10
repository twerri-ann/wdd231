document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const displayData = {
    "First Name": params.get("fname"),
    "Last Name": params.get("lname"),
    "Email": params.get("email"),
    "Phone Number": params.get("phone"),
    "Class": params.get("orgname"),
    "Submitted On": new Date(params.get("timestamp")).toLocaleString()
  };

  const container = document.getElementById("confirmation-data");
  const ul = document.createElement("ul");

  for (const [label, value] of Object.entries(displayData)) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${label}:</strong> ${value || 'N/A'}`;
    ul.appendChild(li);
  }

  container.appendChild(ul);
});