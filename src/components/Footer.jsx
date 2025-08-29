import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} The Paul Hayes Invention</p>
    </footer>
  );
}
