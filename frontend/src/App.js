import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Edit from "./components/Edit/Edit";
import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import { useSelector } from "react-redux";
import Display from "./components/Post/Display";

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const loading = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {/* {!isEdit && <Header setEdit={setEdit} />}
      {isEdit && <Edit setEdit={setEdit} />}

      {loading && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!</p>
      )}
      <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
      {isOpenPost && <Post setOpenPost={setOpenPost} />}
      <div className="post-container">
        <Display />
      </div> */}
      {!isEdit && <Header setEdit={setEdit} />}
      {!isEdit && (
        <div className="post-container">
          <Display />
        </div>
      )}
      {!isEdit && <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />}
      {!isEdit && isOpenPost && <Post setOpenPost={setOpenPost} />}

      {isEdit && <Edit setEdit={setEdit} />}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error when fetching data from server!</p>}
    </div>
  );
};

export default App;
