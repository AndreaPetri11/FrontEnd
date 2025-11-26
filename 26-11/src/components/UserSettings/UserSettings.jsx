import "./UserSettings.css";

function UserSettings({ user, onUpdateUser }) {
  return (
    <div>
      <h3> Settings </h3>
      <input
        value={user.name}
        onChange={(e) => onUpdateUser({ ...user, name: e.target.value })}
      />
    </div>
  );
}

export default UserSettings;
