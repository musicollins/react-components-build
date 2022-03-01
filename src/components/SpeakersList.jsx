import useRequestDelay, {REQUEST_STATUS}  from "../hooks/useRequestDelay";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import initialData from '../../SpeakerData'

export default function SpeakersList({ sessionState, theme }) {

  const {
    data, requestStatus, error, updateRecord
  } = useRequestDelay(initialData, 2000);

  

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return (
      <h1 className={theme === "dark" ? "text-danger" : "text-dark"}>
        {error}
      </h1>
    );


  return (
    <ReactPlaceholder
      type="media"
      rows={10}
      className="speakerslist-placeholder"
      ready={requestStatus === REQUEST_STATUS.SUCCESS}
    >
      <div className="container speakers-list">
        <div className="row">
          {data.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                sessionState={sessionState}
                handleClickFavorite={() => {
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  })
                }}
              />
            );
          })}
        </div>
      </div>
    </ReactPlaceholder>
  );
}
