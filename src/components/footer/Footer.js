import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <p>A Everywhere Cameras é uma instuição focada exclusivamente em fotografia e cinema. Somos a maior distribuidora online de equipamentos fotográficos do Brasil.</p>
            <section className='newsletter'>
                <h2>Deseja receber nossas novidades?</h2>
                <section className='inputAndButton'>
                    <input type='text' placeholder='Digite seu e-mail aqui...'/>
                    <button>Enviar</button>
                </section>
            </section>
            <p>Everywhere Cameras | Todos os diretos reservados.</p>
        </footer>
    );
}