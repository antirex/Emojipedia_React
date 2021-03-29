import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Bamb Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">Create</a>
      </div>
    </div>
  );
}

export default Navbar;