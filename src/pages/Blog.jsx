import React from "react";

export default function Blog() {
  // placeholder blog post
  const posts = [
    {
      title: "Welcome to the Paul Hayes Invention Blog",
      date: "2025-08-29",
      body: "This is a placeholder post. Start adding your thoughts on jazz, music, and performances here!"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Blog</h2>
      {posts.map((post, idx) => (
        <div key={idx} className="mb-6 p-4 bg-[#2c003e] rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">{post.title}</h3>
          <p className="text-gray-300 mb-2">{new Date(post.date).toLocaleDateString()}</p>
          <p className="text-white">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
