import React from 'react'
import Speaker from './Speaker'

export default function SpeakersList({speakers}) {
  return (
    <div className="container speakers-list">
    <div className="row">
      {speakers.map(function (speaker) {
        return <Speaker key={speaker.id} speaker={speaker} />;
      })}
    </div>
  </div>
  )
}
