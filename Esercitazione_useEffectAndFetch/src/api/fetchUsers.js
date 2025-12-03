export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Controllo errore HTTP
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    // Rilancia l'errore, NON restituire err.message!
    throw err;
  }
}
