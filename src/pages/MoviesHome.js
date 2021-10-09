import React, { useRef, useState } from 'react'
import MOVIES_DATA from '../data/MovieData'
import Footer from '../shared/footer'
import Header from '../shared/header'
import ListMovies from '../component/ListMovies'
import Modal from '../shared/modal'


export default function MoviesHome() {
    const [movie, setMovie] = useState(MOVIES_DATA)
    const [movieBackup, setmovieBackup] = useState(MOVIES_DATA)

    const FilterMovie = useRef("")
    const FilterMovieByTitle = () => {
        let query = FilterMovie.current.value;
        if (query == "") setMovie([...movieBackup])
        else {
            let newList = [...movie]
            console.log(query)
            newList = newList.filter((newList) => newList.title.includes(query))
            console.log(newList)
            setMovie([...newList])
        }
    }

    return (
        <>
            <Header FilterMovieByTitle={FilterMovieByTitle} FilterMovie={FilterMovie} />
            <main className="container  d-flex flex-wrap mx-auto">

                <ListMovies movies={movie} />

            </main>

            <Footer />

            <Modal />

        </>
    )
}
