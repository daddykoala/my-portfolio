import React from 'react';
import CV from '../../assets/cv.pdf'



 function callToAction() {
return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href='#contact' className="btn btn-primary">Parlons ensemble </a>
        
    </div>
);
}


export default callToAction;