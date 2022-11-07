import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { TbBrandGithub } from 'react-icons/tb';



function HeaderSocials() {
return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/clement-moretti-39ab59220/" target="_blank" ><FiLinkedin/></a>
        <a href="https://github.com/daddykoala" target="_blank" ><TbBrandGithub/></a>
    </div>
);
}


export default React.memo(HeaderSocials);
