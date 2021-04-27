import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

const NavBar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="./img/logos/logo_2.png" alt="" /></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu&nbsp;
            
            <FontAwesomeIcon icon = {faBars} />
            
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Užsisakyk sulčių</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#apieMus">SULČIŲ PRISTATYMAS</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Apie mus</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Kontaktai</a></li>
            </ul>
        </div>
    </div>
</nav>
);

export default NavBar;