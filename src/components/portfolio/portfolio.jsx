import React from 'react';
//import PropTypes from 'prop-types';
import DEVELOTT from '../../assets/DEVELOTT.png'
import OKANBAN from '../../assets/OKANBAN.png'

import './portfolioStyles.scss';

function Portfolio() {
return (
    <section id='portfolio'>
        <h5>My recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={DEVELOTT} alt="projet" />
                </div>
                <h3>Develott</h3>
                <div className="portfolio__item-cta">

                <a href="lien du projet" className='btn' target='_blank'>github</a>
                <a href="site" className="btn btn-primary" target='_blank'>Live demo</a>
                </div>
                <p>projet professionnel de fin d'année,Develott est une plateforme ou les developpeurs junior peuvent monter des projets avec d'autres développeurs junior.</p>
            </article>
            
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={OKANBAN} alt="projet" />
                </div>
                <h3>O'kanban</h3>
                <div className="portfolio__item-cta">

                <a href="lien du projet" className='btn' target='_blank'>github</a>
                <a href="site" className="btn btn-primary" target='_blank'>Live demo</a>
                </div>
                <p>Projet en cours de realisation.
                    je souhaite simplement reproduire un trello en utilisant react.Vous pouvez venir voir mon avancement directement sur github.</p>
            </article>-
        </div>
        
    </section>
);
}
//portfolio.propTypes = {};

//portfolio.defaultProps = {};

export default React.memo(Portfolio);