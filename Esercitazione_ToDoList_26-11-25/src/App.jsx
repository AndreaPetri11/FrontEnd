import { useState } from "react";
import "./App.css";

import AddOnList from "./components/atoms/Input.jsx";
import { Aggiungi } from "./components/atoms/Button.jsx";
import { CancellaTutto } from "./components/atoms/Button.jsx";
import TodoList from "./components/organisms/TodoList.jsx";

function App() {
  const [action, setAction] = useState({
    name: "",
    description: "",
    category: "",
  });

  const [punti, setPuntiLista] = useState([]);

  const addPunto = () => {
    if (!action.name || !action.description || !action.category) return;
    setPuntiLista([...punti, action]);
    setAction({ name: "", description: "", category: "" });
  };

  const deletePunto = (i) => {
    const nuoviPunti = [...punti];
    nuoviPunti.splice(i, 1);
    setPuntiLista(nuoviPunti);
  };

  return (
    <div>
      <AddOnList action={action} onUpdateList={setAction} addPunto={addPunto} />
      <Aggiungi onClick={addPunto} />
      <CancellaTutto onClick={() => setPuntiLista([])} />
      <TodoList puntiLista={punti} onDelete={deletePunto} />
    </div>
  );
}

export default App;
