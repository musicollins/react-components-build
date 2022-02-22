import React from "react";

export default function Session({session}) {
  const { title, room } = session;
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}
