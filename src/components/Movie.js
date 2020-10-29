import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css"

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

function Movie({ year, title, summary, poster, genres, id }) {
  return (
    <div className="movie__container">
      <Link to={{
        pathname: `/movie/${id}`,
        state: {
          year, title, genres,
          summary, poster
        }
      }}>
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genre, index) => <li key={index} className="movie__genre">{genre}</li>)}
            </ul>
            <p className="movie__summary">{summary.slice(0, 200)}...</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Movie
