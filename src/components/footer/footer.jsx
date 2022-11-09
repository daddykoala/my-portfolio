import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';
import './footerStyles.scss';

function Footer() {
return (
   <footer>
    <a href="#" className='footer__head'>Clement Moretti</a>
    <ul className='permalinks'>
        <a href='#' >Home</a>
        <a href='#About' >About</a>
        <a href='#Experience' >Experience</a>
        <a href='#portfolio' >Portfolio</a>
        <a href='#contact' >Contact</a>
    </ul>

    <div className="footer__socials">
        <a href=""><SiLinkedin/></a>
        <a href=""><AiFillGithub/></a>
    </div>
        
    
   </footer>
);
}


export default React.memo(Footer);