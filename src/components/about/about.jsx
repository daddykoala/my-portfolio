import React from 'react';

import CLEMENT from '../../assets/miniature.jpg';
import { FaAward } from 'react-icons/fa';


import './aboutStyles.scss';

function About() {
    return (
        <section id='about'>
            <h5>Ce que vous devez savoir</h5>
            <h2>Sur moi</h2>

            <div className="container about__container about__content">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={CLEMENT} alt="" />
                    </div>
                </div>
                <div>

                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Expérience</h5>
                        <div className="text__variant">

                        <p>A la recherche de ma premiere expérience </p>
                        </div>
                    </article>

                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Formation</h5>
                        <div className='text__variant'>
                            <p>développeur web fullstack.js à l'école O'clock</p>
                        <p>5 mois de formation socle</p>
                        <p> + 1 mois de spécialisation DATA</p>
                        <p> + 1 mois de spécialisation REACT</p>
                        <p> + 1 mois de projet professionnel en équipe</p>
                        </div>
                    </article>
                </div>

                <p className='text__variant text__variant__italic'>Ayant dirigé des équipes par le passé je comprends les besoins d'une entreprise dans son ensemble.Enthousiaste et passionné je saurai m'intégrer dans un projet et donner le meilleur de moi même.J'ai toujours soif d'apprendre et de progresser. 
                </p>

                <a href="#contact" className='btn btn--primary'>Contactez moi</a>
                </div>


            </div>
        </section>
    );
}


export default React.memo(About);