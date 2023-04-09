import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "./services/blogApi";
import { useAddBlogMutation } from "./services/blogApi";

const Edit = () => {
  const { id } = useParams();
  const {data: blog} = useGetSingleBlogQuery(id)
  const [title, setTitle] = useState('');
  const [desc, setDes] = useState('');
  const [img, setImage] = useState('');

  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation(id)
  useEffect(() =>{
    setTitle(blog?.title);
    setDes(blog?.desc)
    setImage(blog?.img)
  },[blog]);

  const onSubmit = ( e )=>{
    e.preventDefault();
    const newData = {id,title,img,desc}
    updateBlog(newData)
    navigate('/');
   console.log(title,img,desc);
  }

  return (
    <div className=" flex justify-center h-screen items-center">
      <form onSubmit={onSubmit}>
        <div className=" rounded-lg p-7 w-96 shadow-lg">
          <div className=" mb-4">
            <input
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" mb-4">
            <input
              defaultValue={desc}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Description..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" mb-5">
            <input
              defaultValue={img}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image..."
              type="text"
              className="outline-none border-b-2 bg-transparent border-b-gray-700"
            />
          </div>
          <div className=" flex gap-5">
            <button className=" bg-gray-700 px-7 py-1 text-white rounded-lg shadow">
              Update
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

export default Edit;
