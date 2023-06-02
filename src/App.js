import "./App.css";
import React from "react";
import { TopHeader } from "./components/TopHeader/TopHeader";
import TopPresentation from "./components/TopPresentation/TopPresentation";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div>
      <header className="App-header">
        <TopHeader />
      </header>
      <TopPresentation />
        <Introduction />
    </div>
  );
}

export default App;
