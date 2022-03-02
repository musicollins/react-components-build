import React, {useState} from "react";

export default function Favorite({ favorite, toggleIsFavourite }) {

  const [loading, setLoading] = useState(false);


  function doneCallBack() {
    setLoading(false)
    console.log(`Component Updated => ${new Date().getMilliseconds()}`);
  }
  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setLoading(true)
          return toggleIsFavourite(doneCallBack);
        }}
        className="d-flex align-items-center"
      >
        <i
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />
        {"   "}Favorite{" "}
        {loading ? (<span className="fas fa-spinner"></span>) : null}
      </span>
    </div>
  );
}
