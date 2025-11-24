import { apiCall } from "./apiCall.js";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
const ul = document.getElementById(`ul`);

async function fetchUsers() {
  const users = await apiCall(`${API_BASE_URL}/users`);
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
