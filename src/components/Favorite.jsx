import React from 'react'

export default function Favorite({favorite, toggleIsFavourite}) {
  return (
    <div className='action padB1' >
        <span onClick={toggleIsFavourite}>
            <i className={favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"}></i>{" "}Favorite
        </span>
    </div>
  )
}
