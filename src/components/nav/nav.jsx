import React from 'react';
import { useState } from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { RiServiceLine } from 'react-icons/ri';

import './navStyles.scss';

function Nav() {
    const [activeNav,setActiveNav]=useState('#')
return (
    <nav>
        <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BsFillPersonFill/></a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BsJournalBookmarkFill/></a>
        <a href="#portfolio" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><IoMdMail/></a>
    </nav>
);
}
//nav.propTypes = {};

//nav.defaultProps = {};

export default React.memo(Nav);