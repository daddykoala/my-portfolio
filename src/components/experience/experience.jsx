import React from 'react';

import { BsPatchCheckFill } from 'react-icons/bs';
import './experienceStyles.scss';

function Experience() {
    return (
        <section id="experience">
            <h5>Quelles sont mes compétences  </h5>
            <h2>Mon experience</h2>

            <div className="container container__experience">
                <div className="experience__frontend">
                    <h3>Front end</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>

                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>REACT</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>

                        </article>
                    </div>

                </div>
                <div className="experience__backend">
                    <h3>Back end</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>NODE JS</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>EXPRESS JS</h4>
                                <small className="text-contrast">intermediaire</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                            <h4>POSTGRES SQL</h4>
                            <small className="text-contrast">intermediaire</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default React.memo(Experience);