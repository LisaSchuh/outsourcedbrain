import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { get, Note } from "./logic/noteService";

const App: React.FC = () => {
  const notes = get();
  const renderNotes = (notes: Note[]): JSX.Element[] => {
    return notes.map(n => <li>{n.text}</li>);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ul>{renderNotes(notes)}</ul>
    </div>
  );
};

export default App;
