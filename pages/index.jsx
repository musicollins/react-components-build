import { data } from "../SpeakerData";
import Sessions from './components/Sessions'

const index = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          //destructuring properties in the data
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;

          return (
            <div
              key={id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
            >
              <div className="card card-height p-4 mt-4">
                {/*Image*/}
                <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img
                    className="contain-fit"
                    src={`/images/speaker-${id}.jpg`}
                    width="300"
                    alt={`${first} ${last}`}
                  />
                </div>
                {/*Image*/}

                {/*Speaker Demographics*/}
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
                {/*Speaker Demographics*/}
              </div>
              <Sessions sessions={sessions}/>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
