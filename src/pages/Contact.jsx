import React from "react";

export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact / Booking</h2>
      <form name="contact" method="POST" data-netlify="true" className="flex flex-col space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded"/>
        <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded"/>
        <textarea name="message" placeholder="Your Message" required className="p-3 rounded h-32"></textarea>
        <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500">Send</button>
      </form>
    </div>
  );
}
