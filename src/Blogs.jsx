import { Link } from "react-router-dom";
import Card from "./Card";
import { useGetBlogsQuery } from "./services/blogApi";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  //   console.log(blogs);
  return (
    <div>
      <h2 className="text-center mb-5 text-3xl text-gray-700 font-semibold">
        Blogs
      </h2>
      <div className=" flex justify-center my-5">
        <Link to={'/create'}>
          <button className="px-7 py-1 bg-gray-700 text-white rounded-lg shadow">
            Create New Blog
          </button>
        </Link>
      </div>

      <div className=" flex flex-wrap gap-10 justify-center">
        {blogs?.map((blog) => {
          return <Card key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
