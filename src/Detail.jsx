import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "./services/blogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  // console.log(blog);
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
          <Link to={`/`}>
            <button className=" px-5 py-1 bg-gray-700 text-white rounded-lg shadow">
              back to home
            </button>
          </Link>
          <Link to={`/edit/${id}`}>
          <button className="ml-2 px-5 py-1 bg-gray-700 text-white rounded-lg shadow">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
