import React from "react";
import logo from "./logo.svg";
import { get, Note } from "./logic/noteService";
import styled from "styled-components";

const AppStyled = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.header`
  color: #61dafb;
`;

const App: React.FC = () => {
  const notes = get();
  const renderNotes = (notes: Note[]): JSX.Element[] => {
    return notes.map(n => <li>{n.text}</li>);
  };
  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
      </AppHeader>
      <ul>{renderNotes(notes)}</ul>
    </AppStyled>
  );
};

export default App;
