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

  const [punti, setPunti] = useState([]);

  const addPunto = () => {
    if (!action.name || !action.description || !action.category) return;
    setPunti([...punti, action]);
    setAction({ name: "", description: "", category: "" });
  };

  const deletePunto = (index) => {
    const nuoviPunti = [...punti];
    nuoviPunti.splice(index, 1);
    setPunti(nuoviPunti);
  };

  return (
    <div>
      <AddOnList action={action} onUpdateList={setAction} addPunto={addPunto} />
      <Aggiungi onClick={addPunto} />
      <CancellaTutto onClick={() => setPunti([])} />
      <TodoList punti={punti} onDelete={deletePunto} />
    </div>
  );
}

export default App;
