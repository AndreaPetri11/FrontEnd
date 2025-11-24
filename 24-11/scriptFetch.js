const ul = document.getElementById(`ul`);
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
async function apiCall(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Success", `Dati ricevuti da ${endpoint}`);
    return data;
  } catch (error) {
    console.log("API Error", `Errore per ${endpoint}: ${error.message}`);
    return null;
  }
}
async function fetchUsers() {
  const users = await apiCall(`/users`);
  if (users) {
    console.log("Dati Users ricevuti", users);
  }

  users.forEach((element) => {
    const li = document.createElement(`li`);
    li.innerHTML += `<div class="card">
        <h3><strong>${element.name}</strong></h3>
        <p><strong>Username:</strong> ${element.username}</p>
        <p><strong>Email:</strong> ${element.email}</p>
        </div>`;
    ul.appendChild(li);
  });
}
fetchUsers();
