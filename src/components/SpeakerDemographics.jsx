function SpeakerDemographics({first, last, bio, company, twitterHandle, favorite}) {
    return (
      <div className="speaker-info">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="text-truncate w-200">
            {first} {last}
          </h3>
        </div>
        <div>
          <p>
            {bio} {company} {twitterHandle} {favorite}
          </p>
        </div>
      </div>
    );
  }

  export default SpeakerDemographics;