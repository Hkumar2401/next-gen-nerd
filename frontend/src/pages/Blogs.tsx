import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogsCard from "../components/BlogsCard";
import ShimmerBlogCard from "../components/ShimmerBlogCard";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://next-gen-nerd.hemantk240103.workers.dev/blog/getBlogsTable",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setIsLoading(false);
    console.log(data);
    setBlogData(data.blogs);
  };

  return (
    <div className="text-white w-full h-full pb-44 flex flex-col">
      <div className="mt-10 border-b-[1px] border-zinc-700 py-2 flex justify-between items-center">
        <h1 className="text-4xl">Blogs</h1>
        <Link to={"/createBlog"} className="bg-blue-700 p-2 rounded-md">
          Create
        </Link>
      </div>

      <div>
        {isLoading && <ShimmerBlogCard />}

        {blogData.map(
          (blog: { id: number; title: string; description: string }) => {
            return (
              <Link to={`/blog/getBlog/${blog.id}`} key={blog.id}>
                <BlogsCard title={blog.title} description={blog.description} />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Blogs;
