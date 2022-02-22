import { data } from "../../SpeakerData";
import SpeakersList from './SpeakersList'
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

export default function Speakers() {
  const [showSessions, setShowSessions] = useState(true)
  const [theme, setTheme] = useState("light")



  return (
      <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
          <Header theme={theme}/>
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
