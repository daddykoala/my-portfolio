import React from 'react';
import CV from '../../assets/CV_Clement_Moretti_FS.png'


 function callToAction() {
return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href='#contact' className="btn btn-primary">Parlons ensemble </a>
        
    </div>
);
}


export default callToAction;