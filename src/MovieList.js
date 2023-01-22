const MovieList = ({movie}) => {
    return(
        <li className="each-movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <h4>Rated {movie.rating}</h4>
            <img src={movie.image} alt={movie.title} className="movie-poster" />
        </li>
    );
}

export default MovieList;