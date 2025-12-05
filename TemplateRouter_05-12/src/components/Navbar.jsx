import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      {/*
        NavLink funziona come Link, ma possiede
        la proprietà "isActive" che permette
        di applicare uno stile diverso al link
        della pagina corrente.
      */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Chi Siamo
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatti
      </NavLink>
    </nav>
  );
}
