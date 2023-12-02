import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Edit from "./components/Edit/Edit";
import { useSelector } from "react-redux";

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const loading = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {!isEdit && <Header setEdit={setEdit} />}
      {isEdit && <Edit setEdit={setEdit} />}

      {loading && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!</p>
      )}
    </div>
  );
};

export default App;
