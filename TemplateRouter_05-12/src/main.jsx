import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// 1️⃣ Importo BrowserRouter: abilita tutta la logica del Router
import { BrowserRouter } from "react-router-dom";

// 2️⃣ Importo il componente principale
import ReactDOM from "react-dom/client";

// 3️⃣ Render dell'app, come sempre
ReactDOM.createRoot(document.getElementById("root")).render(
  // 4️⃣ Posiziono BrowserRouter ALTO nella gerarchia
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
