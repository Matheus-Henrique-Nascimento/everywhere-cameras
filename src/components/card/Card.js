import React, { useState } from 'react';
import './Card.css';

export default function Card(props){

    const [cardModal, setCardModal] = useState(false);
    const toggleCardModal = () => {
        setCardModal(!cardModal);
    };

    return(
        <section className='card'>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.alt} onClick={toggleCardModal}/>
            <p>{props.paragraph}</p>
            <button onClick={toggleCardModal}>Leia Mais...</button>
            {cardModal && (
                <section className='cardModal' onClick={toggleCardModal}>
                    <section className='cardModalContent'>
                        <h3>Brillant V6</h3>
                        <p>Não haverá a implmentação de uma NewsLetter nesse projeto. A ideia é puramente estética.</p>
                        <button onClick={toggleCardModal}>Fechar</button>
                    </section>
                </section>
            )}
        </section>
    );
}