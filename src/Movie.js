import React from "react";
import reactDom from "react-dom";

const Movie = (list) => {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return (
        <section className='movie-area'>
            <picture>
                <img src={base_url + list.movie.poster_path} />
            </picture>
            <section className='right-area'>
                <p>
                    <h2>{list.movie.name}</h2>
                </p>
                <p>
                    <span>{list.movie.iso_639_1}</span>
                </p>
                <p>
                {list.movie.description}
                </p>
            </section>

        </section>
    )
}

export default Movie;