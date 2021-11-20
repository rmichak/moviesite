import React from "react";

function MovieComponent(props) {

    return (
      <section>
      <h1>{props.movie.title}</h1>
      <img alt="{props.movie.title}" src={props.movie.info.image_url}/>      
      <p>{props.movie.info.plot}</p>
      </section>
    );

}
export default MovieComponent