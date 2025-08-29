import React from "react";

export default function Videos() {
  // placeholder content
  const placeholderVideo = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shadow-md rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64"
            src={placeholderVideo}
            title="Placeholder Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-xl text-white font-semibold">Sample Video</h3>
            <p className="text-gray-300">Description of your performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
