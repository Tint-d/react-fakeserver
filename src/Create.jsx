import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddBlogMutation } from "./services/blogApi";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDes] = useState("");
  const [img, setImage] = useState("");

  const [addBlog] = useAddBlogMutation();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, desc, img };
    addBlog(newBlog);
    navigate("/");
    console.log(newBlog);
  };

  return (
    <div className=" flex justify-center h-screen items-center">
      <form onSubmit={onSubmit}>
        <div className=" rounded-lg p-7 w-96 shadow-lg">
          <div className=" mb-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" mb-4">
            <input
              value={desc}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Description..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" mb-5">
            <input
              value={img}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" flex gap-5">
            <button className=" bg-gray-700 px-7 py-1 text-white rounded-lg shadow">
              Create
            </button>
            <Link to={"/"}>
              <button className=" border-2 border-gray-600 px-7 py-1 text-gray-600 rounded-lg shadow">
                Back
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
