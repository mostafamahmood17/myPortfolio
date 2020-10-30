import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#05386B"}}>
                <a className="navbar-brand text-warning" href="#"><h3 className="border border-warning rounded">MM</h3></a>
                <button className="navbar-toggler border border-warning" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className=""><img width="25px" src="https://mdbootstrap.com/img/svg/hamburger8.svg?color=FFCC00" alt=""/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto ">
                        <a className="nav-item nav-link active text-warning" href="#work"><h5>Projects</h5><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-warning" href="#skills"><h5>Skills</h5></a>
                        <a className="nav-item nav-link text-warning" href="#blog"><h5>Blogs</h5></a>
                        <a className="nav-item nav-link text-warning" href="#about"><h5>About</h5></a>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;