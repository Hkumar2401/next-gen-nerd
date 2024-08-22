import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

    const [blogInput, setBlogInput] = useState({
        title: "",
        description: ""
    });

    const navigate = useNavigate();

    const handleCreateBlog = async ()=>{
        const {data} = await axios.post('https://next-gen-nerd.hemantk240103.workers.dev/blog/createBlog', blogInput, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });

        console.log(data);

        if(data.success){
            navigate('/blogs');
        }
        
    }
    
  return (
    <div className="text-white h-screen w-full mt-10">
        <div>
            <h1 className="text-3xl">Create Blog</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mt-20">
            <label className="text-[#7f8ea3] text-xl" htmlFor="title">Title</label>
            <input onChange={(e)=>{
                setBlogInput((prevState) => ({...prevState, title: e.target.value}))
            }} value={blogInput.title} id="title" className="p-3 mt-5 bg-[#030711] rounded-md border-[1px] border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800" type="text" placeholder="Title" />

            <label className="text-[#7f8ea3] text-xl mt-10" htmlFor="description">Description</label>
            <textarea rows={15} onChange={(e)=>{
                setBlogInput((prevState)=> ({...prevState, description: e.target.value}))
            }} value={blogInput.description} id="description" className="p-3 mt-5 bg-[#030711] rounded-md border-[1px] border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 resize-none" placeholder="Enter your thoughts here...." />

            <button onClick={handleCreateBlog} className="mt-10 bg-blue-700 rounded-md p-3" type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreateBlog