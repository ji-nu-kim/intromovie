import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./css/Home.css"

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })

  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loader">
            <div className="gray"></div>
            <div className="rec1"></div>
            <div className="rec2"></div>
            <div className="rec3"></div>
            <div className="rec4"></div>
          </div>
          : <div className="movies">
            {movies.map(movie => (
              <Movie genres={movie.genres} id={movie.id}
                key={movie.id} year={movie.year}
                poster={movie.medium_cover_image}
                summary={movie.summary} title={movie.title}
                bgImage={movie.large_cover_image}
                originalImage={movie.background_image}
                language={movie.language} rating={movie.rating}
              />
            ))}
          </div>
        }
      </section>
    )
  }
}

export default Home;
