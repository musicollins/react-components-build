
import Header from "./Header";
import Speakers from './Speakers'
import {useState} from 'react'
import {data} from '../../SpeakerData';


export default function App() {
  const [theme, setTheme] = useState("dark")

  return (
      <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
          <Header theme={theme}/>
          <Speakers theme={theme} setTheme={setTheme} data={data}/>

      </div>
    
  )
}