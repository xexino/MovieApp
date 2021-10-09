import { Link } from 'react-router-dom'

export default function Header({FilterMovie,FilterMovieByTitle}) {
  
    return (
        <>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="p-2">
                            <Link to={`/`} style={{ textDecoration: 'none' }}> <a className="navbar-brand text-warning">Anime Site</a></Link>
                            <Link to={`/`} style={{ textDecoration: 'none' }}>  <a className="navbar-brand link-light">Home</a></Link>
                        </div>
                        <form className="d-flex justify-content-between p-2">
                            <input
                            onKeyUp={FilterMovieByTitle} 
                            ref={FilterMovie}
                            className="form-control me-1" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" />
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-search" />
                            </button></form><button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">SIGN
                                IN <i className="fas fa-sign-in-alt" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
