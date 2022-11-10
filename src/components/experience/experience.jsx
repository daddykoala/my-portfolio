import React from 'react';

import { BsPatchCheckFill } from 'react-icons/bs';
import './experienceStyles.scss';

function Experience() {
    return (
        <section id="experience">
            <h5>What skills I have </h5>
            <h2>My Experience</h2>

            <div className="container container__experience">
                <div className="experience__frontend">
                    <h3>Frontend development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-contrast">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-contrast">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className="text-contrast">Experienced</small>
                            </div>

                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>REACT</h4>
                                <small className="text-contrast">Experienced</small>
                            </div>

                        </article>
                    </div>

                </div>
                <div className="experience__backend">
                    <h3>Backend development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>NODE JS</h4>
                                <small className="text-contrast">medium</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>EXPRESS JS</h4>
                                <small className="text-contrast">medium</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                            <h4>POSTGRES SQL</h4>
                            <small className="text-contrast">medium</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default React.memo(Experience);