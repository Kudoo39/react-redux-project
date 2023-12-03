import React, { useState } from "react";
import Input from "../Input/Input";
import "./Post.css";

const Post = () => {
  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some descriptions");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  return (
    <div>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save">Post</p>
        </div>
        <Input
          data={title}
          inputType="textarea"
          setData={setTitle}
          label="Title"
          className="makepost-title"
        />
        <Input
          data={description}
          inputType="textarea"
          setData={setTitle}
          label="Descriptions"
          className="makepost-desc"
        />
        <label htmlFor="">Tags</label>
        <div className="makepost-tags">
          {tags.map((tag) => {
            return <button className={`makepost-tags-${tag}`}>{tag}</button>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Post;
