import React from "react";
import EventCard from "../components/EventCard";

export default function Events() {
  // placeholder seeded event
  const events = [
    {
      title: "Straight Ahead Jazz and Fusion Jam",
      date: "2025-08-31T19:00:00",
      location: "Wildfyre Tap, Indiana",
      link: "https://www.eventbrite.com/e/straight-ahead-jazz-and-fusion-jam-at-the-wildfyre-tap-sunday-august-31-tickets-1642733884269?aff=oddtdtcreator"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Events</h2>
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </div>
  );
}
