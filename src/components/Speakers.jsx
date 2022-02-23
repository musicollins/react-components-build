import SpeakersList from './SpeakersList'
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
import {data} from '../../SpeakerData';

export default function Speakers({theme, setTheme}) {
  const [showSessions, setShowSessions] = useState(true)

  return (
      <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
          <SpeakersToolbar 
            sessionState={showSessions} 
            toggleSessions={setShowSessions}
            theme={theme}
            setTheme={setTheme}
            />
          <SpeakersList speakers={data} sessionState={showSessions} />
      </div>
    
  )
}
