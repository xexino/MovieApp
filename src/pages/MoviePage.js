import React, { useEffect, useState } from 'react'
import MovieDetails from '../component/MovieDetails'
import MOVIES_DATA from '../data/MovieData'
import Footer from '../shared/footer'
import Header from '../shared/header'
import Modal from '../shared/modal'

export default function MoviePage({match}) {
 
    const [movie, setMovie] = useState(MOVIES_DATA)

    useEffect(() => {
        // retrieve the movie by id 
        let id = match.params.id
        setMovie({...MOVIES_DATA.find(a => a.id == id)})
    }, [])

    return (
        <>
            <Header />

            <MovieDetails movie={movie} />

            <Footer />
            
            <Modal />
        </>
    )
}
