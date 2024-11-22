import { useState } from 'react';
import classes from './exam.module.css';

export default function ExamMovie() {
    const [request, setRequest] = useState('');
    const [movies, setMovies] = useState([]);

    async function fetchMovies(request){
        if (!request) {
            setMovies([]);
            return;
        }

        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${request}&apikey=a2b07930&s`);
            const data = await response.json();

            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error('Ошибка :', error);
        }
    };

    function searchButton(){
        fetchMovies(request);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.styleH1}>Поиск кино</h1>
            <input value={request} onChange={event => setRequest(event.target.value)}  placeholder="Введите название фильма" className={classes.inputMovie}/>
            <button onClick={searchButton} className={classes.button}>Найти</button>
            <div className={classes.listMovie}>
                {movies.map(movie => (<MovieCard key={movie.imdbID} movie={movie} />))}
            </div>
        </div>
    );
}

function MovieCard({ movie }) {
    return (
        <fieldset className={classes.cardMovie}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            {movie.Poster && <img src={movie.Poster} className={classes.imgMovie} />}
        </fieldset>
    );
}