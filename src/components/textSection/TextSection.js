import React from 'react';
import './TextSection.css';

export default function TextSection(props){
    return(
        <main>
            <section className='textSection'>
                <img src={props.firstPhoto} alt='Ilustrações coloridas referentes a câmeras.'/>
                <section className='text'>
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                </section>
                <img src={props.secondPhoto} alt='Ilustrações coloridas referentes a câmeras.'/>
            </section>
        </main>
    );
}