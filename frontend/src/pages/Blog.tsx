import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {

    const [blogData, setBlogData] = useState({
        title: "",
        description: ""
    });

    const {blogId} = useParams();

    useEffect(()=>{
        getBlog();
    }, []);

    const getBlog = async () =>{
        const {data} = await axios.get(`https://next-gen-nerd.hemantk240103.workers.dev/blog/getBlog/${blogId}`, {
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        });
        console.log(data);
        setBlogData(data.blog[0]);
    }
    
  return (
    <div className="h-screen mt-20 flex flex-col text-white">
        <div className="border-b-[1px] border-gray-700 py-3">
            <h1 className="text-5xl font-bold text-center">{blogData.title}</h1>
        </div>

        <div className="mt-10 border-b-[1px] border-gray-700">
            <p className="text-xl py-20">{blogData.description}</p>
        </div>


        
    </div>
  )
}

export default Blog