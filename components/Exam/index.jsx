import React, { useState, useEffect } from 'react';

export default function ExamMovie() {
    const [request, setRequest] = useState('');
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
         async function fetchMovies(){
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
                console.error('Error fetching the movies:', error);
            }
        };

        fetchMovies();
    }, [request]);

    return (
        <div style={{ padding: '20px', width:'100px' }}>
            <h1>Поиск кино</h1>
            <input value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Введите название фильма"/>
            <div>
                {movies.map(movie => (<MovieCard  movie={movie} />))}
            </div>
        </div>
    );
}


function MovieCard({ movie }) {
    return (
        <fieldset style={{ margin: '10px 0',  }}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            {movie.Poster && <img src={movie.Poster} style={{ width: '100px' }} />}
        </fieldset>
    );
}


