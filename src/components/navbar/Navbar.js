import React from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar(){
    return(
        <header>
            <nav>
                <h1 onClick={() => scroll.scrollToTop()}>Everywhere Cameras</h1>
                <ul>
                    <li><Link to="cameras" spy={true} smooth={true} offset={-200} duration={500}>Câmeras</Link></li>
                    <li><Link to="equipaments" spy={true} smooth={true} offset={-200} duration={500}>Acessórios</Link></li>
                    <li><Link to="stockFilms" spy={true} smooth={true} offset={-200} duration={500}>Filmes Fotográficos</Link></li>
                    <li><Link to="infoSection" spy={true} smooth={true} offset={-100} duration={500}>Quem Somos</Link></li>
                </ul>
            </nav>
        </header>
    );
}