import React from "react";

function MoviesCard(props) {
  return (
    <div>
      <img src={props.movie.Poster} alt="" />
      <p>{props.movie.Title}</p>
    </div>
  );
}

export default MoviesCard;