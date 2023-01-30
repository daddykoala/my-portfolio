import React from 'react';
//import PropTypes from 'prop-types';
import DEVELOTT from '../../assets/DEVELOTT.png'
import AUDE from '../../assets/aude.jpg'

import './portfolioStyles.scss';

function Portfolio() {
return (
    <section id='portfolio'>
        <h5>Mes travaux récents</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={DEVELOTT} alt="projet" />
                </div>
                <h3>Develott</h3>
                <div className="portfolio__item-cta">

                <a href="https://github.com/daddykoala/develott-back" className='btn' target='_blank'>github</a>
                <a href="https://develott.fr/" className="btn btn-primary" target='_blank'>Live demo</a>
                <a href="https://api.develott.fr/api-docs/" className="btn btn-primary" target='_blank'>Doc back</a>
                </div>
                <p>Projet professionnel de fin d'année,Develott est une plateforme où les développeurs junior peuvent monter des projets avec d'autres développeurs junior.</p>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={AUDE} alt="projet" />
                </div>
                <h3>Aude Renson</h3>
                <div className="portfolio__item-cta">

                <a href="https://github.com/daddykoala/Aude-renson" className='btn' target='_blank'>github</a>
                <a href="https://xn--aude-renson-consultante-en-parentalit-ckd.com/" className="btn btn-primary" target='_blank'>Live demo</a>
                
                </div>
                <p>Projet réalisé en react pour une connaissance qui commence son activité dans le conseil en parentalité</p>
            </article>


            
            {/* <article className="portfolio__item none">
                <div className="portfolio__item-image">
                    <img src={OKANBAN} alt="projet" />
                </div>
                <h3>O'kanban</h3>
                <div className="portfolio__item-cta">

                <a href="https://github.com/daddykoala/develott-back" className='btn' target='_blank'>github</a>
                <a href="
                https://develott-front.herokuapp.com/" className="btn btn-primary" target='_blank'>Live demo</a>
                <a href="site" className="btn btn-primary" target='_blank'>Doc back</a>
                </div>
                <p>Projet en cours de réalisation.
                    je souhaite simplement reproduire un trello en utilisant react, materialUI et mongoDB Vous pouvez venir voir mon avancement directement sur github.</p>
            </article> */}
        </div>
        
    </section>
);
}
//portfolio.propTypes = {};

//portfolio.defaultProps = {};

export default React.memo(Portfolio);