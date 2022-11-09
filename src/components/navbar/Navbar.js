import React from 'react';
import './Navbar.css';

export default function Navbar(){
    return(
        <header>
            <nav>
                <h1>Everywhere Cameras</h1>
                <ul>
                    <li><a href="#">Câmeras</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Filmes Fotográficos</a></li>
                    <li><a href="#">Quem Somos</a></li>
                </ul>
            </nav>
        </header>
    );
}