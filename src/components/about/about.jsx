import React from 'react';
//import PropTypes from 'prop-types';
import CLEMENT from '../../assets/clement.jpg';
import { FaAward } from 'react-icons/fa';


import './aboutStyles.scss';

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

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
                        <h5>expérience</h5>
                        <small>A la recherche de ma premiere expérience </small>
                    </article>

                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Formation</h5>
                        <small>A la recherche de ma premiere expérience </small>
                    </article>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab.
                </p>

                <a href="#contact" className='btn btn--primary'>let's talk</a>
                </div>


            </div>
        </section>
    );
}
//about.propTypes = {};

//about.defaultProps = {};

export default React.memo(About);