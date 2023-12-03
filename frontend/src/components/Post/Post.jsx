import React, { useState } from "react";
import Input from "../Input/Input";
import "./Post.css";

const Post = ({ setOpenPost }) => {
  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some descriptions");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: description,
      tag: selectedIndex,
    };
  };
  return (
    <div>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlePost}>
            Post
          </p>
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
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                className={`${
                  selectedIndex === index
                    ? "makepost-tags-selected"
                    : `makepost-tags-${tag}`
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Post;
