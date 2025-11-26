import { useState } from "react";
import UserSettings from "./components/UserSettings/UserSettings.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import UserStats from "./components/UserStats/UserStats.jsx";
import { mockUser } from "./mock/user.js";

function App2() {
  const [userData, setUserData] = useState(mockUser);
  //console.table(userData); // DEBUG
  return (
    <>
      <UserProfile user={userData} onUpdateUser={setUserData} />
      <UserSettings user={userData} onUpdateUser={setUserData} />
      <UserStats user={userData} />
    </>
  );
}

export default App2;
