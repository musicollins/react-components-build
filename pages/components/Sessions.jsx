import React from "react";
import Session from "./Session";

function Sessions({ sessions }) {
console.log(sessions)
  return (
    <div className="sessionBox card h-250">
        <Session title={sessions[0].title} room={sessions[0].room.name} />
    </div>
  );
}

export default Sessions;
