import "./App.css";
import { ClickCounter } from "./components/ClickCounter/ClickCunter";
import RealAPIExample from "./components/RealAPIExample/RealAPIExample";
import { UserSearch } from "./components/UserSearch/UserSearch";
import { WeatherApp } from "./components/WeatherApp/WeatherApp";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

function App() {
  return (
    <>
      <WelcomeMessage />
      <br></br>
      <br></br>
      <br></br>
      <ClickCounter />
      <br></br>
      <br></br>
      <br></br>
      <UserSearch />
      <br></br>
      <br></br>
      <br></br>
      <WeatherApp />
      <br></br>
      <br></br>
      <br></br>
      <RealAPIExample />
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
