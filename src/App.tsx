import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { get } from "./logic/noteService";
import { List, Typography } from "antd";

const App: React.FC = () => {
  const notes = get().map(n => n.text);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List
          bordered
          dataSource={notes}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </header>
    </div>
  );
};

export default App;
