import React from "react";
import { Link } from "gatsby";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">home link</Link>
          <button type="button">hamburger</button>{" "}
        </div>
        <div>nav-links</div>
      </div>
    </nav>
  );
}

export default Navbar;
