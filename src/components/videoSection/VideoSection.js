import React from 'react';
import './VideoSection.css';

export default function VideoSection(props){
    return(
        <main>
            <section className='videoSection'>
                <video src={props.ulr} autoPlay loop muted/>
            </section>
        </main>
    );
}