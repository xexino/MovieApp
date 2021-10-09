import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies({movie}) {
    
    return (
        <>
             <div className="card m-3  " style={{ width: 281 }}>
                <img className="card-img-top img" src={movie.image} style={{ width: 279}} alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                   <button type="button" className="btn btn-warning">          
                     <Link to={`/MovieDetails/${movie.id}`}  style={{ color: 'inherit', textDecoration: 'none' }}>  Watch Now <i className="fas fa-eye"></i> </Link>
                    </button>
                </div>
            </div>
        </>
    )
}
