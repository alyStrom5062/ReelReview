import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../backend/data/moviedata";

import barbie from "../movie-posters/barbie.jpg";

export default function Movie(){
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const movie = getMovieById(movieId);

        if(movie) {
            setMovieData(movie);
        } else {
            console.error("Not found.")
        }
    }, [movieId]);

    if (!movieData) {
        return <div>Loading...</div>
    }

    return (
        <main className="movie">
            <NavBar />
            <div className="grid-container">
                <div className="grid-item col1">
                    <img src={barbie} alt="Poster for the barbie movie"></img>
                </div>
                <div className="grid-item col2">
                    <div className="review">
                        <p className="username">Username</p>
                        <p>Star count</p>
                        <p className="reviewtext">Paragraph</p>
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
                <div className="grid-item col3">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <p className="movieinfo title">{movie.title}</p>
                            <p className="movieinfo director">{movie.director}</p>
                            <p className="movieinfo studio">{movie.studio}</p>
                            <p className="movieinfo genre">{movie.genre}</p>
                            <p className="movieinfo cast">{movie.cast}</p>
                            <p className="movieinfo description">{movie.description}</p>
                        </div>
                ))}
                </div>
            </div>
        </main>
    );
}