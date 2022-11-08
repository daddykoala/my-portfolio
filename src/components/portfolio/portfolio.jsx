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
                <a href="lien du projet" className='btn' target='_blank'>github</a>
                <a href="site" className="btn btn-primary" target='_blank'>Live demo</a>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={OKANBAN} alt="projet" />
                </div>
                <h3>O'kanban</h3>
                <a href="lien du projet" className='btn' target='_blank'>github</a>
                <a href="site" className="btn btn-primary" target='_blank'>Live demo</a>
            </article>
        </div>
        
    </section>
);
}
//portfolio.propTypes = {};

//portfolio.defaultProps = {};

export default React.memo(Portfolio);