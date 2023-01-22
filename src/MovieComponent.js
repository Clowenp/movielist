import './MovieComponent.css';

//the movie data is not available outside the component
// thus it is a state!
import { movies } from './data/movies.js';

function fetchMovieData() {
    return movies;
}

const MovieComponent = () => {
    
    const movieData = fetchMovieData();

    return(
        <div className="movie-container">
            <h2 className="list-of-movies">List of Movies</h2>
            <ul className= "ul-of-movies">
                {movieData.map((movie) => (
                    <li className="each-movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <h4>Rated {movie.rating}</h4>
                        <img src={movie.image} alt={movie.title} className="movie-poster" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieComponent;