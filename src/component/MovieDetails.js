import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieDetails({ movie }) {

    return (

        <>
        <Link to={`/`}><button type="button" class="btn btn-secondary mt-3 ms-5 p-2"><i class="fas fa-arrow-left"></i> Go back</button></Link> 

            <main className="container2 m-3 d-flex border">
                <div className="m-2">
                    <img src={movie.image} style={{ width: 400 }} alt={movie.title} />
                </div>
                <div className="m-2">
                    <div className="d-flex align-items-center m-2 ">
                        <h1 className="p-1">{movie.title}</h1>
                        <p className="text-muted p-3">(6.3k)</p>
                        <i className="fas fa-star p-1" style={{ color: 'rgb(247, 247, 49)' }} />
                        <h3 className="p-1">8.5/10</h3>
                    </div>
                    <div className="p-3">
                        <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat, velit ducimus optio
                            minima
                            suscipit temporibus quisquam magnam? Pariatur repellendus commodi corporis. Iste accusamus
                            dolorem delectus aspernatur alias unde porro qui quas adipisci rerum saepe totam,
                            necessitatibus
                            nesciunt corrupti officia officiis quisquam consequuntur aperiam! Autem veritatis iure
                            tempore
                            quia, illo, officia vel quas non magni odit dolore iste minima perferendis dolorum, alias ut
                            accusantium consequatur a eveniet. Aperiam, esse unde.</b> </p>
                        <h5 className="text-muted">Premier Date April 11, 2021</h5>
                        <div className="badge bg-primary m-1 " style={{ width: '6rem' }}>
                            Drama
                        </div>
                        <div className="badge bg-success m-1 " style={{ width: '6rem' }}>
                            science
                        </div>
                        <div className="badge bg-danger m-1 " style={{ width: '6rem' }}>
                            science
                        </div>
                        <div>
                            <h1>Actors</h1>
                            <ul className="list-group" style={{ width: 250 }}>
                                <li className="list-group-item">Tom Ellis</li>
                                <li className="list-group-item">Lauren German</li>
                                <li className="list-group-item">Aimee Garcia</li>
                            </ul>
                        </div>
                        <Link to={`/MovieDetails/${movie.id}`}> <button type="button" className="btn btn-warning mt-3">Watch Now <i className="fas fa-eye" />
                        </button></Link>
                    </div>
                </div>

            </main>

        </>
    )
}
