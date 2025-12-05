// 1️⃣ Importo i costrutti base: Routes e Route
import { Routes, Route } from "react-router-dom";

// 2️⃣ Importo i componenti-pagina
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      {/* 🏠 Rotta principale ("/") */}
      <Route path="/" element={<Home />} />

      {/* ℹ️ Rotta "Chi Siamo" */}
      <Route path="/about" element={<About />} />

      {/* 📞 Rotta "Contatti" */}
      <Route path="/contact" element={<Contact />} />

      {/* 📞 Rotta "User" */}
      <Route path="/user/:id" element={<User />} />

      {/* 📞 Rotta "Not Found" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
