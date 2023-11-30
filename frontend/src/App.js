import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Edit from "./components/Edit/Edit";

const App = () => {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      {!isEdit && <Header setEdit={setEdit} />}
      {isEdit && <Edit />}
    </div>
  );
};

export default App;
