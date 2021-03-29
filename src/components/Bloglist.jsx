import React from "react";

function BlogList(props) {
  const bloglist = props.blogs;
  const blogTitle = props.title;
  return (
    <div classname="blog-list">
      <h2>{blogTitle}</h2>
      {bloglist.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <h4>Author: {blog.author}</h4>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
