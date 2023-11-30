import React from "react";
import "./Edit.css";

const Edit = () => {
  const Avatar = [
    "https://preview.redd.it/w68y4ueaut561.png?auto=webp&s=560b0669c7a47fd84b0d85d14b4c445645cf9808",
    "https://i.redd.it/snoovatar/avatars/0ec8fb04-b3b1-4a8d-bf06-ee4a877193e0.png",
    "https://i.redd.it/snoovatar/avatars/fe65d758-8622-4610-8349-6a721e87b0eb.png",
    "https://i.redd.it/snoovatar/avatars/f1fe2a75-a250-497b-a8ce-0cf6b16500e1.png",
    "https://i.redd.it/snoovatar/avatars/57817a78-c5ef-4eb5-bd65-16d2986d5ad5.png",
    "https://i.redd.it/snoovatar/avatars/d940095a-98e2-4e5b-8c8f-3972dcda7cd7.png",
    "https://i.redd.it/snoovatar/avatars/b499fd96-7a10-4d02-abb6-755278d90f4b.png",
    "https://i.redd.it/snoovatar/avatars/4b33fb6f-7c52-41c9-a9ac-8e04a505f099.png",
  ];
  return (
    <>
      <form>
        <section className="edit-container">
          <button className="close">Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <label htmlFor="">Display name</label>
            <input type="text" placeholder="Khang Nguyen" />
            <label htmlFor="">Age</label>
            <input type="text" placeholder="21" />
            <label htmlFor="">About</label>
            <textarea className="input-about"></textarea>

            <label htmlFor="">Profile Avatar</label>
            <div className="input-image-container">
              {Avatar.map((url) => {
                return (
                  <>
                    <img src={url} className="input-image" alt="" />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Edit;
