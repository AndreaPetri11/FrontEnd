import { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetchUsers";

export function EsercitazioneUseEffect() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setloading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setloading(false);
      }
    };
    loadUsers();
  }, []);

  if (loading) return <div> Caricamento Users...</div>;
  if (error) return <div> Errore: {error}</div>;

  return (
    <div>
      <h2>📄 Carte utente prese dal Server jsonplaceholder</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            maxWidth: "300px",
          }}
        >
          <h3>{user.username}</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}
