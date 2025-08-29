import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a2e] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl text-yellow-400">Paul Hayes</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/videos" className="hover:text-yellow-400">Videos</Link>
          <Link to="/events" className="hover:text-yellow-400">Events</Link>
          <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
