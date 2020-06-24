import React from "react";
import "./sass/index.scss";
import Input from "./components/Input";
import Itemfield from "./components/Itemfield";

function App() {
  return (
    <div className="mainContainer">
      <Input />
      <Itemfield />
    </div>
  );
}

export default App;
