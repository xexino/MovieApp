import React from 'react'

export default function Footer() {
    return (
        <>

            <div>
                <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
                    {/* Grid container */}
                    <div className="container pt-4">
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
                            {/* Twitter */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                            {/* Google */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
                            {/* Instagram */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
                            {/* Linkedin */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                            {/* Github */}
                            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2021 Copyright:
                        <a className="text-dark">AYMAN EL HAMOUSSI</a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Button trigger modal */}
              
            </div>

        </>
    )
}
