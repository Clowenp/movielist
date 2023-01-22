import './MovieComponent.css';
import MovieList from './MovieList.js';

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
                    <MovieList key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    );
}

export default MovieComponent;