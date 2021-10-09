import React from 'react'
import Movies from './Movies'

export default function ListMovies({movies}) {
    return (
        <>
            {
                movies.map(((m)=> <Movies
                key={m.id}
                movie={m}   
                />))
            }
        </>
    )
}
