import React, { useState } from "react";
import "./Edit.css";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";

const Edit = ({ setEdit }) => {
  const Avatar = [
    "https://preview.redd.it/w68y4ueaut561.png?auto=webp&s=560b0669c7a47fd84b0d85d14b4c445645cf9808",
    "https://i.redd.it/snoovatar/avatars/0ec8fb04-b3b1-4a8d-bf06-ee4a877193e0.png",
    "https://i.redd.it/snoovatar/avatars/fe65d758-8622-4610-8349-6a721e87b0eb.png",
    "https://i.redd.it/snoovatar/avatars/f1fe2a75-a250-497b-a8ce-0cf6b16500e1.png",
    "https://i.redd.it/snoovatar/avatars/57817a78-c5ef-4eb5-bd65-16d2986d5ad5.png",
    "https://i.redd.it/snoovatar/avatars/d940095a-98e2-4e5b-8c8f-3972dcda7cd7.png",
    "https://i.redd.it/snoovatar/avatars/b499fd96-7a10-4d02-abb6-755278d90f4b.png",
    "https://i.redd.it/0gaywfkq6l071.png",
  ];

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [avatar, setAvatar] = useState(user.avatar);
  const [theme, setTheme] = useState(user.theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avatar: avatar,
      theme: theme,
    };
    dispatch(update(updatedUser));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              className="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />

            <label htmlFor="">Profile Avatar</label>
            <div className="input-image-container">
              {Avatar.map((url) => {
                return (
                  <>
                    <img
                      onClick={(e) => setAvatar(e.target.src)}
                      src={url}
                      className="input-image"
                      alt=""
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label htmlFor="">Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Edit;
