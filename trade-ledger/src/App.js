import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSubmit={handleChange} />
      </header>

      <ul>
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
      </ul>
    </div>
  );
}

export default App;
