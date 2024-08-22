import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const { data } = await axios.get(
      "https://next-gen-nerd.hemantk240103.workers.dev/blog/getBlogsTable",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(data);
    setBlogData(data.blogs);
  };

  return (
    <div className="text-white w-full h-full pb-44 flex flex-col">
      <div className="mt-10 border-b-[1px] border-zinc-700 py-2 flex justify-between items-center">
        <h1 className="text-4xl">Blogs</h1>
        <Link to={'/createBlog'} className="bg-blue-700 p-2 rounded-md">Create</Link>
      </div>

      {blogData.map(
        (blog: { id: number; title: string; description: string }) => {
          return (
            <div
              key={blog.id}
              className="mt-10 px-5 py-10 rounded-md border-[1px] border-zinc-700"
            >
              <h1 className=" text-3xl font-bold">{blog.title}</h1>
              <p className="mt-5">{blog.description}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Blogs;
