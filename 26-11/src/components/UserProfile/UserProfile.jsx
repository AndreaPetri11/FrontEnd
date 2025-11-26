import "./UserProfile.css";

function UserProfile({ user, onUpdateUser }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.email}</p>

      {/* Gli eventi fluiscono verso l'alto */}
      <button onClick={() => onUpdateUser({ ...user, age: user.age + 1 })}>
        Add 1 year!
      </button>
    </div>
  );
}

export default UserProfile;
