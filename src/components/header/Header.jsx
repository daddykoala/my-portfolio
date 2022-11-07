import React from 'react';
//import PropTypes from 'prop-types';
import CallToAction from './callToAction';
import imageprofil from '../../assets/imageprofil.png';
import HeaderSocials from './HeaderSocials';

import './headerStyles.scss';

function Header() {
return (
    <header>
        <div className="container container__header">
            <h5 >hello i'm</h5>
            <h1>Moretti Clément</h1>
            <h5 className="text-light">Fullstack developpeur</h5>
            <CallToAction/>
            <div>
                <HeaderSocials/>
            </div>
            <div className="me">
                <img src={imageprofil} alt="me" />
            </div>
                <a href="#contact" className='scroll__down'>ScrollDown</a>
        </div>
    </header>
);
}
//header.propTypes = {};

//header.defaultProps = {};

export default React.memo(Header);