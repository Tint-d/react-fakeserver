import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useGetSingleBlogQuery,
} from "./services/blogApi";

const Card = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation();

  const delBtn = () =>{
    console.log();
  }
  return (
    <div>
      <div className=" w-64 p-5 shadow-lg rounded-lg flex flex-col">
        <img
          src={blog?.img}
          className="mb-4 h-[150px] object-cover rounded-lg"
          alt=""
        />
        <div>
          <p className=" mb-2 ">{blog?.title}...</p>
          <p className=" mb-2 ">{blog?.desc}...</p>
          <Link to={`/blogs/${blog?.id}`}>
            <button className=" px-5 py-1 bg-gray-700 text-white rounded-lg shadow">
              detail
            </button>
          </Link>
          <button
            onClick={() => deleteBlog(blog?.id)}
            className=" px-5 py-1 ml-5 bg-red-700 text-white rounded-lg shadow"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
