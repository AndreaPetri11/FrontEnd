import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import "./App.css";

// App.jsx è il contenitore dell'intera UI
export default function App() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#07b72d3f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "800px",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        {/* 🔝 Navbar sempre visibile */}
        <Navbar />
        <br />
        <br />
        {/* 🔀 Mappa di tutte le rotte */}
        <AppRouter />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
