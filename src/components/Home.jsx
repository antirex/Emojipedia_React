import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

function Home() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "XYZ", body: "lorem ipsum ....", author: "vans" },
    { id: 2, title: "ABC", body: "lorem ipsum ....", author: "shreeya" },
    { id: 3, title: "PQR", body: "lorem ipsum ....", author: "anshul" },
    { id: 4, title: "TUV", body: "lorem ipsum ....", author: "anshul" }
  ]);

  const [name, setName] = useState('ansh');

  const deleteBlog = function(id){
    const newBlogs = blogs.filter((blog)=>blog.id !== id)
    setBlogs(newBlogs);
  } 

  useEffect(()=>{
    console.log('Use effect ran');
  }, [name])

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All blogs" handleDelete={deleteBlog}/>
      <button onClick={()=>{setName('Nshul')}}>change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
