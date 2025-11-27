import "./App.css";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import ShowCase from "./components/ShowCase/ShowCase";
import { prodotti } from "./mock/products";

function App() {
  return (
    <>
      <ShowCase prodotti={prodotti} />
      <ShoppingCart />
    </>
  );
}

export default App;
