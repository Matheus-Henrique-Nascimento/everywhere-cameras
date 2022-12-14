import React, { useState } from 'react';
import './Card.css';

export default function Card(props){
    return(
        <section className='card'>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.alt}/>
            <p>{props.paragraph}</p>
            <button>Leia Mais...</button>
        </section>
    );
}