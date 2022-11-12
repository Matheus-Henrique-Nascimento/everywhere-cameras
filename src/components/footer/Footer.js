import React, { useState } from 'react';
import './Footer.css';

export default function Footer(){

    const [footerModal, setFooterModal] = useState(false);
    const toggleFooterModal = () => {
        setFooterModal(!footerModal);
    };
    if(footerModal){
        document.body.classList.add('activeModal');
    }else{
        document.body.classList.remove('activeModal');
    }

    return(
        <footer>
            <p>A Everywhere Cameras é uma instuição focada exclusivamente em fotografia e cinema. Somos a maior distribuidora online de equipamentos fotográficos do Brasil.</p>
            <section className='newsletter'>
                <h2>Deseja receber nossas novidades?</h2>
                <section className='inputAndButton'>
                    <input type='text' placeholder='Digite seu e-mail aqui...'/>
                    <button onClick={toggleFooterModal}>Enviar</button>
                </section>
            </section>
            <p>Everywhere Cameras | Todos os diretos reservados.</p>
            {footerModal && (
                <section className='footerModal' onClick={toggleFooterModal}>
                    <section className='footerModalContent'>
                        <h3>Erro!</h3>
                        <p>Não haverá a implmentação de uma NewsLetter nesse projeto. A ideia é puramente estética.</p>
                        <button onClick={toggleFooterModal}>Fechar</button>
                    </section>
                </section>
            )}
        </footer>
    );
}