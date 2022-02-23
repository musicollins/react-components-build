import SpeakerImage from "./SpeakerImage";
import SpeakerDemographics from "./SpeakerDemographics";
import Sessions from "./Sessions";

function App({ speaker, sessionState }) {
  const { sessions, id, first, last } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerDemographics {...speaker} />
      </div>
      {sessionState && <Sessions sessions={sessions} />}
    </div>
  );
}

export default App;