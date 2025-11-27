import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import "./App.css";
import { Saluta } from "./components/Hello/Hello";

function App() {
  const users = [
    { id: 1, name: "Lorenzo", age: 18 },
    { id: 2, name: "Giovanni", age: 13 },
    { id: 3, name: "Gianluca", age: 35 },
  ];

  return (
    <>
      <WelcomeCard name="Gino" age={18} isVip={true} />
      <br></br>
      <br></br>
      <Saluta name="Mario" age={30} />
      <Saluta name="Carlo" age={13} />
      <Saluta name="Luca" age={35} />
      <br></br>
      <br></br>
      {users.map((user) => (
        <Saluta key={user.id} name={user.name} age={user.age} />
      ))}
    </>
  );
}

export default App;
