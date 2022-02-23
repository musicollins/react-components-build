import React, { useState } from 'react'
import Speaker from './Speaker'
import {data} from '../../SpeakerData'

export default function SpeakersList({sessionState}) {

  const [speakersData, setSpeakersData] = useState(data);

  const handleClickFavorite = (id) =>{
    console.log("CLICKED!")
    const speakerToBeUpdated = speakersData.find(speaker => speaker.id === id);

    const updatedSpeaker = {
      ...speakerToBeUpdated,
      favorite: !speakerToBeUpdated.favorite
    }

    const updatedData = speakersData.map(speaker => {
      return speaker.id === id ? updatedSpeaker : speaker
    })
    setSpeakersData(updatedData)
  }
  
  return (
    <div className="container speakers-list">
    <div className="row">
      {speakersData.map(function (speaker) {
        return (
        <Speaker 
          key={speaker.id} 
          speaker={speaker}
          sessionState={sessionState} 
          handleClickFavorite={
            () => handleClickFavorite(speaker.id)
          }/>);
      })}
    </div>
  </div>
  )
}
