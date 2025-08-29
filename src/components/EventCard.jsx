import React from "react";

export default function EventCard({ title, date, location, link }) {
  return (
    <div className="bg-[#2c003e] p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-yellow-400 text-xl font-bold">{title}</h3>
      <p className="text-white">{new Date(date).toLocaleString()}</p>
      <p className="text-white">{location}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
        More Info
      </a>
    </div>
  );
}
