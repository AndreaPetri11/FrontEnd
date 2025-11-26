import "./App.css";
import Button from "./components/Buttons/Button";

import {
  mostraButtonClicked,
  mostraSaluti,
  mostraAddio,
} from "./utilities/mostraFunction";

import Counter from "./components/Counters/Counter";

import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import { items } from "./mock/items.js";
import { products } from "./mock/items.js";

function App() {
  return (
    <section>
      <h2>Alert test</h2>
      <br></br>
      <br></br>
      <Button text="Click me" onClick={mostraButtonClicked} className="btn1" />
      <Button text="Saluta" onClick={mostraSaluti} className="btn2" />
      <Button text="Addio" onClick={mostraAddio} className="btn3" />
      <p>Clicca questo pulsante per mostrare un alert</p>
      <br></br>
      <br></br>
      <h2>Count test</h2>
      <Counter />
      <br></br>
      <br></br>
      <h2>Shopping List test</h2>
      <ShoppingList items={items} />
      <ShoppingList items={products} />
    </section>
  );
}

export default App;
