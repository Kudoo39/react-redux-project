import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Edit from "./components/Header/Edit/Edit";

const App = () => {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      <Header setEdit={setEdit} />
      <Edit />
    </div>
  );
};

export default App;
