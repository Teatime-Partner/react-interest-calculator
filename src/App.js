import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";
import DisplayBalance from "./components/balance.jsx";

function App() {
  return (
    <div className="App">
      <DisplayBalance />
    </div>
  );
}

export default App;
