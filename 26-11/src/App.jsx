import "./App.css";
import Button from "./components/Buttons/Button";
import {
  mostraButtonClicked,
  mostraSaluti,
  mostraAddio,
} from "./utilities/mostraFunction";

function App() {
  return (
    <section>
      <h2>Alert test</h2>
      <br></br>
      <br></br>
      <Button text="Click me" onClick={mostraButtonClicked} className="btn1" />
      <Button text="Saluta" onClick={mostraSaluti} className="btn2" />
      <Button text="Addio" onClick={mostraAddio} className="btn3" />
      <br></br>
      <br></br>
      <p>Clicca questo pulsante per mostrare un alert</p>
    </section>
  );
}

export default App;
