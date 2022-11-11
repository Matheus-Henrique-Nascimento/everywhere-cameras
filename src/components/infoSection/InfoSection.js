import React from 'react';
import './InfoSection.css';

export default function TextSection(props){
    return(
        <main>
            <section id='infoSection'>
                <img src={props.firstPhoto} alt='Ilustrações coloridas referentes a câmeras.'/>
                <section className='text'>
                    <h2>{props.title}</h2>
                    <section className='paragraphs'>
                        <p>{props.firstParagraph}</p>
                        <p>{props.secondParagraph}</p>
                        <p>{props.thirdParagraph}</p>
                        <p>{props.firstInfo}</p>
                        <p>{props.secondInfo}</p>
                    </section>
                </section>
                <img src={props.secondPhoto} alt='Ilustrações coloridas referentes a câmeras.'/>
            </section>
        </main>
    );
}