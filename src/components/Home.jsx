import React, { useState } from "react";
import Bloglist from "./Bloglist";

function Home() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "XYZ", body: "lorem ipsum ....", author: "vans" },
    { id: 1, title: "ABC", body: "lorem ipsum ....", author: "shreeya" },
    { id: 1, title: "PQR", body: "lorem ipsum ....", author: "anshul" }
  ]);
  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All the blogs" />
    </div>
  );
}

export default Home;
